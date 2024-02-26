import "../../assets/css/home.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import UploadIcon from "@mui/icons-material/Upload";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from "react-router-dom";
const Home = () => {


  const nav = useNavigate();

  const toAbout=()=>{
    nav("/agrofunds/user/about");
  }

  return (
    <div className="home_container">
      <div className="top1">
        <div className="main_head">
          <div className="box">
            <div className="first_line">
              Sow, Grow, Thrive: Your Farming Journey Starts Here.
            </div>
            <div className="second_line">
              From seed to yield, we're here to provide the capital and support
              you need to grow your farm, your community, and your future.
            </div>
            <button className="button_home" type="button" onClick={toAbout}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="small_box">
          <div className="head">Explore Types</div>
          <div className="text1">
            Explore our loan options today and discover how we can help you
            achieve your farming goals and unlock your farm's full potential.
          </div>
          <div className="button_to_next">
            <button className="button_Types" onClick={nav("/agrofunds/user/loantypes")}>Types of Loans</button>
          </div>
        </div>
        <div className="small_box">
          <div className="head">Explore Types</div>
          <div className="text1">
            Explore our loan options today and discover how we can help you
            achieve your farming goals and unlock your farm's full potential.
          </div>
          <div className="button_to_next">
            <button className="button_Types">Types of Loans</button>
          </div>
        </div>
        <div className="small_box">
          <div className="head">Explore Types</div>
          <div className="text1">
            Explore our loan options today and discover how we can help you
            achieve your farming goals and unlock your farm's full potential.
          </div>
          <div className="button_to_next">
            <button className="button_Types">Types of Loans</button>
          </div>
        </div>
      </div>
      <div className="how_agri">
        <div className="how_head">How it Works ?</div>
        <div className="how_conents">
          <div className="how_smallbox">
            <EditNoteIcon className="how_icon" />
            <div className="how_box_head">Fill your form</div>
          </div>
          <div className="how_arrow">
            <ArrowForwardIosIcon className="how_icon"/>
          </div>
          <div className="how_smallbox">
            <div className="how_ima">
              <UploadIcon className="how_icon" />
            </div>
            <div className="how_box_head">Upload Required Documents</div>
          </div>
          <div className="how_arrow">
            <ArrowForwardIosIcon className="how_icon"/>
          </div>
          <div className="how_smallbox">
            <div className="how_ima">
              <TurnedInIcon className="how_icon" />
            </div>
            <div className="how_box_head">Submit Form</div>
          </div>
          <div className="how_arrow">
            <ArrowForwardIosIcon className="how_icon"/>
          </div>
          <div className="how_smallbox">
            <div className="how_ima">
              <QuestionMarkIcon className="how_icon" />
            </div>
            <div className="how_box_head">View Current Status</div>
          </div>
        </div>
      </div>
      <div className="why_agri">
        <div className="why_head">Why CARA ?</div>
        <div className="why_conents">
          <div className="why_smallbox">
            <div className="box_head">Tailored Financial Solutions</div>
            <div className="box_content">
              Specializing in loans that cater specifically to the unique needs
              of farmers, including seasonal production loans, equipment
              financing, and infrastructure development loans, ensuring that
              each farmer finds a financial solution that matches their specific
              agricultural project.
            </div>
          </div>
          <div className="why_smallbox">
            <div className="box_head">Quick and Easy Application Process</div>
            <div className="box_content">
              Streamlining the loan application process with a simple online
              platform, making it quick and easy for farmers to apply for and
              receive the financial support they need without unnecessary
              delays.
            </div>
          </div>
          <div className="why_smallbox">
            <div className="box_head">Expert Agricultural Support</div>
            <div className="box_content">
              Beyond financial assistance, providing expert advice and support
              to farmers, helping them make informed decisions about crop
              selection, sustainable farming practices, and market trends. This
              holistic approach ensures that farmers are not just financially
              supported but also educated and empowered.
            </div>
          </div>
          <div className="why_smallbox">
            <div className="box_head">
              Community Development and Economic Growth
            </div>
            <div className="box_content">
              By supporting the agricultural sector, agri loans contribute to
              the development of rural communities and stimulate economic
              growth, creating jobs and improving food security.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="banner"></div> */}
    </div>
  );
};

export default Home;
