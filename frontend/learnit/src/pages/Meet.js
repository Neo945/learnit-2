import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";

function Meet({subject}) {
  console.log(subject);
  const [loading, setLoading] = useState(false);
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "100%",
    height: "100%",
  };

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: `${subject}`,
        height: 700,
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
        userInfo: {
          displayName: `${subject}`,
        }
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", "MyName");
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, []);

  return (
<div
   style={containerStyle}
  >
   {loading && <ProgressComponent />}
   <div
    id="jitsi-container"
    style={jitsiContainerStyle}
   />
  </div>
  );
}

export default Meet;
