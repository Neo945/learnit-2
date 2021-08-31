import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const subjectComponent = (props) => {
  return (
    <div className="subject-container">
      <div className="subject-img">
        <img
          src="https://s3-alpha-sig.figma.com/img/ed5b/920c/37049a5a16169000f5349a0c5afd2ab6?Expires=1630886400&Signature=J9WYmNTrQpfG1IUl7zFr1VihIh1MEnxmA0KqxNh7Jm3qScmpiCHrgGzg95JVnu2eJeuvFeKNPLB5VkgGOcZbJJ3WfEHnc2fMeFdmR4gmn3zMuUQElWPhdwwL10CaXZ32uwSi~fNKhYoVj8F6jQf4FlHI7KDfbe7wJZ~lWF~nVkwkmde9kUQxcL9cp6wKzwfWG02nFsZsxipw2FSWn8610c5CotXcNAnx1Lw5PiL5eCMv7tmcF6yMdtFYYIC33LbYChOWhjXv4tiRx7cIexL57I925k14haJL8D6-u1LWr78WRVsUwdpCDkmCX4~-ouFVrJGrNbgCTng49O0vWxR8Mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="pic"
        />
      </div>
      <div className="subject-info">
        <div className="flex-1">
          <b>Subject: {props.subject?.name}</b>
          <p>Teacher: {props.subject?.teacher.user.username}</p>
        </div>
        <div className="btn-placement">
          <Link to="/meet">
            <Button variant="contained" color="secondary">
              Meet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default subjectComponent;
