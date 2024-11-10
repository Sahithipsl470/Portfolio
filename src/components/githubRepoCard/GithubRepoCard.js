import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // State to manage description toggle

  // Function to open the repo in a new tab
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Toggle description visibility
  const toggleDescription = (e) => {
    e.stopPropagation(); // Prevent the card click from firing when clicking "Read more"
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openRepoinNewTab(repo.url)} // Only fires when the card (outside of "Read more") is clicked
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id}>
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          
          {/* Handle description display with "Read more" functionality */}
          <p
              className={`repo-description ${isDescriptionExpanded ? "expanded" : ""}`}
              style={{ color: theme.text }}
            >
            {isDescriptionExpanded
              ? repo.description
              : `${repo.description.substring(0, 50)}...`}
            <span
              style={{
                color: theme.accentColor,
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={toggleDescription} // This will toggle the description without opening the GitHub page
            >
              {isDescriptionExpanded ? "Read less" : "Read more"}
            </span>
          </p>
          
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
