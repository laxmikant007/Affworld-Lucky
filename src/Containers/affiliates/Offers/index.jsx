import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal, Button } from 'react-bootstrap';

import "./Offers.css";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ReactFlagsSelect from "react-flags-select";
// import StarIcon from "@mui/icons-material/Star";
import TableComponent from "../../../Components/UI/Table";
import { addCampagin, deleteCampagin, getData } from '../service/api';
import Loader from "../../Loader/index";


// import MultiSelect from "../../../Components/UI/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  getDatabase,
  ref,
  child,
  get,
} from "firebase/database";

/**
 * @author
 * @function Offers
 **/

const theme = createTheme();

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "6px",
  borderColor: "#4d5863",
  backgroundColor: "#343f4a",
  "&:hover": {
    backgroundColor: "#343f4a",
  },
  color: "#fff",
  marginLeft: 0,
  width: "30% !important",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Offers = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const [data, setData] = useState([]);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  // const [availability, setAvailability] = useState("");
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  // const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [offers, setOffers] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
    console.log(category);
    console.log(event.target.value);
  };

  const handleCountryChange = (countries) => {
    setSelectedCountries(countries);
  };

  // const handleAvailabilityChange = (avail) => {
  //   setAvailability(avail);
  // };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (!auth.user) {
      navigate("/user/login");
    }
    fetchData();

  }, [auth, navigate]);


  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.log('error is-->', error);
    }
  };

  useEffect(() => {








    const dbRef = ref(getDatabase());
    get(child(dbRef, `categories`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllCategories(snapshot.val());
        } else {
          console.log("No data categories available");
        }
      })
      .catch((error) => {
        console.error(error);
      });








    get(child(dbRef, `offers`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setOffers(snapshot.val());
        } else {
          console.log("No offer  data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className="offers_container">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "#2b303b" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ color: "#6e7a83" }}
                  label="All Offers"
                  {...a11yProps(0)}
                />
                {/* <Tab
                  sx={{ color: "#6e7a83" }}
                  label="My Offers"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ color: "#6e7a83", borderLeft: "1px solid #2b303b" }}
                  label="Smart Links"
                  {...a11yProps(2)}
                /> */}
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              All Offers
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
              My Offers
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel> */}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={searchText}
                onChange={handleSearchTextChange}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            {/* <FormControl fullWidth sx={{ ml: 2 }}>
              <Select
                displayEmpty
                value={availability}
                sx={{
                  borderRadius: "6px",
                  color: "#fff",
                  borderColor: "#4d5863",
                }}
                onChange={handleAvailabilityChange}
              >
                <MenuItem disabled value="">
                  Availability
                </MenuItem>
                <MenuItem value={10}>
                  <span
                    style={{
                      display: "inline-flex",
                      background: "rgb(39, 174, 96)",
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                  Available
                </MenuItem>
                <MenuItem value={20}>
                  <span
                    style={{
                      display: "inline-flex",
                      background: "rgb(243, 183, 90)",
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                  Require Approval
                </MenuItem>
              </Select>
            </FormControl> */}

            <FormControl sx={{ ml: 2 }} fullWidth>
              <Select
                displayEmpty
                value={category}
                sx={{
                  borderRadius: "6px",
                  color: "#fff",
                  borderColor: "#4d5863",
                }}
                onChange={handleCategory}
              >
                <MenuItem disabled value="">
                  Select Category
                </MenuItem>
                <MenuItem value="">All Categories</MenuItem>
                {allCategories.map((category, index) => {
                  return (
                    <MenuItem key={index} value={category.name}>
                      {category.name}
                    </MenuItem>
                  );
                })}
                {/* <MenuItem value="Category 1">Category 1</MenuItem> */}
                {/* <MenuItem value="Category 2">Category 2</MenuItem> */}
                {/* <MenuItem value="Category 3">Category 3</MenuItem> */}
              </Select>
            </FormControl>

            <FormControl sx={{ ml: 2, mr: 2 }} fullWidth>
              <ReactFlagsSelect
                // countries={['US', 'CA', 'MX', 'GB', 'DE', 'FR', 'IN', 'CN']}
                // customLabels={{ US: 'United States', CA: 'Canada', MX: 'Mexico', GB: 'United Kingdom', DE: 'Germany', FR: 'France', IN: 'India', CN: 'China' }}
                selected={selectedCountries}
                onSelect={handleCountryChange}
                multiSelect={true}
                className="menu-flags"
                selectButtonClassName="menu-flags-button"
                searchable
                searchPlaceholder="Search country"
              />
            </FormControl>

            {/* <FormControlLabel control={<Checkbox />} label="New" />
          <FormControlLabel control={<Checkbox />} label="Top" />
          <FormControlLabel
            control={<Checkbox />}
            label={<StarIcon sx={{ color: "#F8DA6F" }} />}
          /> */}
          </Box>
          <TableComponent
            categoryFilter={category}
            targetFilter={selectedCountries}
            searchTextFilter={searchText}
            rowData={offers}
          />

          <div className="affilate-table-container">
            <div className="affilate-table-container">
              <table className="table table-striped table-hover">
                <thead className="table-primary">
                  <tr>
                    <th className="affilate-deatils-all">No.</th>
                    <th className="affilate-deatils-all">Campagin</th>
                    <th className="affilate-deatils-all">Description</th>
                    <th className="affilate-deatils-all">Tags</th>
                    <td className="affilate-deatils-all"> URL</td>
                    <td className="affilate-deatils-all"> code</td>
                    <td className="affilate-deatils-all"> Remarks</td>
                  </tr>
                </thead>


                <tbody>
                  {

                    loading ? (
                      data?.length > 0 &&
                      data.map((item, index) => (
                        <tr key={index}>
                          <td style={{color:"white"}} className="affilate-deatils-all">{index + 1}</td>
                          {/* <td className="affilate-deatils-all">{item?.advitisor_id}</td> */}
                          <td style={{color:"white"}} className="affilate-deatils-all">{item?.name}</td>
                          <td style={{color:"white"}} className="affilate-deatils-description">{item?.description}</td>
                          <td style={{color:"white"}} className="affilate-deatils-all">10</td>
                          <td style={{color:"white" ,  fontSize: 20 }} className='affilate-deatils-all'>

                            <Button style={{fontWeight:700 }}>
                            <a href={item?.url} target="_blank" rel="noopener noreferrer">
                              Link
                            </a>
                            </Button>
                           
                          </td>
                          <td style={{color:"white"}} className="affilate-deatils-all">{item?.code}</td>
                          {/* <td className="affilate-deatils-all">{item?._id}</td> */}

                          <td >

                            {/* <Button style={{marginLeft:20}} variant="danger" onClick={()=>deleteOfferCampagin(item._id)}>
                      Delete
                    </Button> */}

                    
                    <Button style={{marginLeft:20}} variant="success" >
                      Delete
                    </Button>

                          </td>

                        </tr>
                      ))
                    ) : <Loader />


                  }
                </tbody>



              </table>
            </div>

          </div>




        </Container>
      </ThemeProvider>
    </>
  );
};

export default Offers;
