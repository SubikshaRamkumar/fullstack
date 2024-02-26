import "../../assets/css/profile.css";
const Profile = () => {
  return (
    <div className="profile_container">
      <div className="big_box">
        <div className="left_colour">
          <div className="top">
            <div className="content">
              <div className="head">Cara</div>
              <div className="photo_name">
                <div className="photo"></div>
                <div className="name">Hi Subiksha ! Welcome</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom_lists">
              <div className="item">Edit Profile</div>
              <div className="item">Logout</div>
              <div className="item">Edit Profile</div>
              <div className="item">Logout</div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="mid_top">
            <div className="mid_top_head">Loan Progress</div>
            <div className="mid_top_progress">
              <div className="progress" id="progress"></div>
              <div className="circle active">1</div>
              <div className="circle active">2</div>
              <div className="circle">3</div>
              <div className="circle">4</div>
            </div>
            <div className="mid_top_content">
              You have 2 more stage pendings
            </div>
          </div>
          <div className="mid_bottom">
            <div className="bottom_bigbox">
              <div className="bot_head">Loan Details</div>
              <div className="bot_det">
                <div className="bot_each">
                  <div className="bot_small_box">
                    <p className="each_head">Loan Reference Id</p>
                    <p className="each_det">#156279def2</p>
                  </div>
                </div>
                <div className="bot_each">
                  <div className="bot_small_box">
                    <p className="each_head">Loan Type</p>
                    <p className="each_det">Salary Advance</p>
                  </div>
                  <div className="bot_small_box">
                    <p className="each_head">Loan Term</p>
                    <p className="each_det">12 months</p>
                  </div>
                  <div className="bot_small_box">
                    <p className="each_head">Loan Purpose</p>
                    <p className="each_det">Crop loan</p>
                  </div>
                  <div className="bot_small_box">
                    <p className="each_head">Monthly Installment</p>
                    <p className="each_det">2300.00</p>
                  </div>
                </div>
                <div className="bot_each">
                  <div className="bot_small_box">
                    <p className="each_head">Loan Status</p>
                    <p className="each_det">Pending</p>
                  </div>
                </div>
                <div className="bot_each">
                  <div className="bot_small_box">
                    <p className="each_head">Date of Expiry</p>
                    <p className="each_det">25th June 2024</p>
                  </div>
                  <div className="bot_small_box">
                    <p className="each_head">Due Date</p>
                    <p className="each_det">25th of every month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_transparent">
          <div className="right_head">User Info</div>
          <div className="right_det">
            <div className="right_each"><strong>Title : </strong>Ms.</div>
            <div className="right_each"><strong>Name : </strong>Subiksha</div>
            <div className="right_each"><strong>Email : </strong>subi@gmail.com</div>
            <div className="right_each"><strong>Age :</strong> 20</div>
            <div className="right_each"><strong>Gender :</strong> Female</div>
            <div className="right_each"><strong>Date of Birth :</strong> 11th Dec 2024</div>
            <div className="right_each"></div>
          </div>
          {/* <div className="edit_button">
            <button className="button">Edit Profile</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
