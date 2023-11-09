import React, { Component } from "react";
import profilePic from "../../../public/images/profile_pic.png"

class LeftPane extends Component {
    render() {
        return(
            <aside className="left-pane">
                <div>
                    <a href="/" className="basic-info-name">
                        <h1>{this.props.sharedData.basic_info.name}</h1>
                    </a>
                </div>
                <div className="image-container">
                    <img
                        alt="Profile Picture"
                        src={profilePic}
                        className="profile-pic"
                    />
                </div>
                <div className="basic-info-bio">
                    <div>
                        <p>{this.props.sharedData.basic_info.bio}</p>
                    </div>
                    <div>
                        <p>{this.props.sharedData.basic_info.working_on.text}: <br />
                        <a href="{this.props.sharedData.basic_info.working_on.link}" className="basic-info-project">
                            {this.props.sharedData.basic_info.working_on.project}
                        </a>
                        </p>
                    </div>
                </div>
            </aside>
        );
    }
}

export default LeftPane;