import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
function Dropdown(props) {
  return (
    <>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item onClick={()=>{props.setAction(0)}}  >Action 1</Dropdown.Item>
            <Dropdown.Item onClick={()=>{props.setAction(1)}}>Action 2</Dropdown.Item>
            <Dropdown.Item onClick={()=>{props.setAction(2)}}>Action 3</Dropdown.Item>
        </DropdownButton>
        
        <Link to="/grid"><Button variant="success">Success</Button>{' '}</Link>
    </>
  );
}

export default Dropdown;