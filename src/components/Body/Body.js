import React, { useRef, useState } from "react";
import ReactToPrint from 'react-to-print';
import { ArrowDown } from "react-feather";
import StyleSheet from './Body.module.css';
import Editor from "../Editor/Editor";
import { useEffect } from "react";
import Resume from "../Resume/Resume";

function Header() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0ace0", "#ed8977"];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Project",
        education: "Education",
        achievement: "Achievemnets",
        summary: "Summary",
        other: " Other"
    };
    const resumeRef=useRef()


    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: [],
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
            points: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
            points: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: [],
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: [ ],
        },
    });

    useEffect(() => {
        console.log(resumeInformation);
    }, [resumeInformation]);

    return (
        <div className={StyleSheet.container}>
            <p className={StyleSheet.heading}>Resume Builder</p>
            <div className={StyleSheet.toolbar}>
                <div className={StyleSheet.colors}>
                    {colors.map((item) => (
                        <span key={item}
                            style={{ backgroundColor: item }} className={`${StyleSheet.color} ${activeColor === item ? StyleSheet.active : ""}`}
                            onClick={() => setActiveColor(item)}
                        />
                    ))}
                </div>
                <ReactToPrint
                    trigger={() => {

                        return (<button>Download <ArrowDown /></button>);
                    }}
                    content={() => resumeRef.current}
                />

            </div>
            <div className={StyleSheet.main}>
                <Editor
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation} />
                <Resume
                    ref={resumeRef}
                    sections={sections}
                    information={resumeInformation}
                    activeColor={activeColor}
                />
            </div>
        </div>

    );
}
export default Header;