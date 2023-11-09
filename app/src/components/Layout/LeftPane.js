import React, { Component } from "react";
import profilePic from "../../../public/images/profile_pic.png"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class LeftPane extends Component {
    render() {
        const basic_info = this.props.sharedData.basic_info;

        const socialIcons = {
            github: GitHubIcon,
            linkedin: LinkedInIcon,
        }

        return(
            <aside className="left-pane">
                <div>
                    <a href="/" className="basic-info-name">
                        <h1>{basic_info.name}</h1>
                    </a>
                </div>
                <div className="profile-pic-container">
                    <img
                        alt="Profile Picture"
                        src={profilePic}
                        className="profile-pic"
                    />
                </div>
                <div className="basic-info-bio">
                    <div>
                        <p>{basic_info.bio}</p>
                    </div>
                    <div>
                        <p>{basic_info.working_on.text}: <br />
                        <a href={basic_info.working_on.link} className="basic-info-project">
                            {basic_info.working_on.project}
                        </a>
                        </p>
                    </div>
                </div>
                <div className="basic-info-socials">
                    {basic_info.socials.map((network) => (
                        <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer" className={network.class}>
                            {React.createElement(socialIcons[network.name])}
                        </a>
                    ))}
                </div>
            </aside>
        );
    }
}

export default LeftPane;