import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {DropdownButton,Dropdown, Nav,Navbar} from 'react-bootstrap'
import {useState} from 'react'
import {filterOptions} from './filteroptions.js'
import logo from './logo.svg'
import './App.css';
<link rel="stylesheet" type="text/css" href="App.css"></link>



function App() {
  
  const [priceSelectedOption, setPriceSelectedOption] = useState(filterOptions.price[0]);
  const [marketcapSelectedOption, setMarketcapSelectedOption] = useState(filterOptions.marketcap[0]);
  const [avgvolSelectedOption, setAvgvolSelectedOption] = useState(filterOptions.avgvol[0]);
  const [epsgrowthSelectedOption, setEpsgrowthSelectedOption] = useState(filterOptions.epsgrowth[0]);
  function handleSelect(eventKey,filter) {
    switch(filter) {
      case'price':
        setPriceSelectedOption(eventKey);
        break;
      case 'marketcap':
        setMarketcapSelectedOption(eventKey);
        break;
      case 'avgvol':
        setAvgvolSelectedOption(eventKey);
        break;
      case 'epsgrowth':
        setEpsgrowthSelectedOption(eventKey);
        break;
      default:
    }
    // Apply filter based on selected option
  }
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm" className="navBar">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo"/>
          Logo
        <Nav className="list ml-auto">
          <Nav.Link href="Screener" className="link">Screener</Nav.Link>
          <Nav.Link href="placeholder1" className="link">Placeholder1</Nav.Link>
          <Nav.Link href="placeholder2" className="link">Placeholder2</Nav.Link> 
        </Nav>
        </Navbar.Brand>
        <Navbar.Toggle /> 
        <Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
      <div className="filter-section">
          
          <h3>Select filter criteria:</h3>
          <div className="row">
            <div className="col-sm-3"><DropdownButton  id="price-filter" title={'Price: '+priceSelectedOption} className="w-100 filter-dropdown" onSelect={(eventKey) => handleSelect(eventKey,'price')}>
              {filterOptions.price.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>{option}</Dropdown.Item>
              ))}
            </DropdownButton></div>
            <div className="col-sm-3"><DropdownButton  id="marketcap-filter" title={'Market Cap.: '+marketcapSelectedOption} className="w-100 filter-dropdown" onSelect={(eventKey) => handleSelect(eventKey,'marketcap')}>
              {filterOptions.marketcap.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>{option}</Dropdown.Item>
              ))}
            </DropdownButton></div>
            <div className="col-sm-3"><DropdownButton  id="avgvol-filter" title={'Avg. Vol.: '+avgvolSelectedOption} className="w-100 filter-dropdown" onSelect={(eventKey) => handleSelect(eventKey,'avgvol')}>
              {filterOptions.avgvol.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>{option}</Dropdown.Item>
              ))}
            </DropdownButton></div>
            <div className="col-sm-3"><DropdownButton  id="epsgrowth-filter" title={'EPS Growth: '+epsgrowthSelectedOption} className="w-100 filter-dropdown" onSelect={(eventKey) => handleSelect(eventKey,'epsgrowth')}>
              {filterOptions.epsgrowth.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>{option}</Dropdown.Item>
              ))}
            </DropdownButton></div>
          </div>
      </div>
      <div className="content">This is content</div>
      
      
      
      
    </div>
  );
}

export default App;