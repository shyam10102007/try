import React, { useEffect, useState } from "react";
import StyleSheet from './Editor.module.css'
import InputControl from "../InputControl/InputControl";
import { X, x } from "react-feather";
import { act } from "react-dom/test-utils";

function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const [activeSectionKey, setactiveSectionKey] = useState(Object.keys(sections)[0]);
    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);


    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    );

    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || ""
    });
    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];

        tempValues.points[index] = value
        setValues(tempValues);
    };
    const basicInfoBody = (
        <div className={StyleSheet.detail}>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Name"
                    placeholder="Enter your full name eg. Dain Levo"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value })
                        )
                    }
                />
                <InputControl
                    Lable="Title"
                    placeholder="Enter  eg. Front-End Developer"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    }
                />
            </div>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Linkedin Link"
                    placeholder="Enter Linkedin profile link"
                    value={values.linkedin}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, linkedin: event.target.value })
                        )
                    }
                />

                <InputControl
                    Lable="Github Link"
                    placeholder="Enter github profile"
                    value={values.github}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value })
                        )
                    }
                />
            </div>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value })
                        )
                    }
                />
                <InputControl
                    Lable="Phone Number"
                    placeholder="Enter your number"
                    value={values.phone}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, phone: event.target.value })
                        )
                    }
                />
            </div>
        </div>
    );

    const workExpBody = (<div className={StyleSheet.detail}>
        <div className={StyleSheet.row}>
            <InputControl
                Lable="Title"
                placeholder="Enter title eg. Front-End Developer"
                value={values.title}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, title: event.target.value })
                    )
                }
            />

            <InputControl
                Lable="Company Name"
                placeholder="Enter company name eg. Amazon"
                value={values.companyName}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, companyName: event.target.value })
                    )
                }
            />
        </div>
        <div className={StyleSheet.row}>
            <InputControl
                Lable="Certificate Link"
                placeholder="Enter certificate link"
                value={values.certificationlink}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, certificationlink: event.target.value })
                    )
                }
            />

            <InputControl
                Lable="Location"
                placeholder="Enter location eg. Remote"
                value={values.location}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, location: event.target.value })
                    )
                }
            />
        </div>
        <div className={StyleSheet.row}>
            <InputControl
                Lable="Start Date"
                type="date"
                placeholder="Enter start date of work"
                value={values.startDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, startDate: event.target.value })
                    )
                }
            />

            <InputControl
                Lable="Last date of work"
                type="date"
                placeholder="Enter last date of work"
                value={values.lastDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, lastDate: event.target.value })
                    )
                }
            />
        </div>
        <div className={StyleSheet.coloum}>
            <label>Enter your work discription</label>
            <InputControl placeholder="Line 1"
                value={values.points ? values.points[0] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 0)} />
            <InputControl placeholder="Line 2"
                value={values.points ? values.points[1] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 1)}
            />
            <InputControl placeholder="Line 3"
                value={values.points ? values.points[2] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 2)}
            />
            <InputControl placeholder="Line 4"
                value={values.points ? values.points[3] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 3)}
            />
        </div>
    </div>
    );
    const projectBody = (
        <div className={StyleSheet.detail}>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Title"
                    placeholder="Enter title eg. Chat App"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    }
                />

                <InputControl
                    Lable="Overview"
                    placeholder="Enter basic overview of project"
                    value={values.overview}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, overview: event.target.value })
                        )
                    }
                />
            </div>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Deployed Link"
                    placeholder="Enter deployed link of project"
                    value={values.deployedLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, deployedLink: event.target.value })
                        )
                    }
                />

                <InputControl
                    Lable="Github Link"
                    placeholder="Enter github link of project "
                    value={values.github}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value })
                        )
                    }
                />
            </div>
            <div className={StyleSheet.coloum}>
                <label>Enter project discription</label>
                <InputControl placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>

        </div>
    );
    const educationBody = (
        <div className={StyleSheet.detail}>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Title"
                    value={values.title}
                    placeholder="Enter title eg. B-tech"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value })
                        )
                    }
                />

                <InputControl
                    Lable="College/School Name"
                    value={values.college}
                    placeholder="Enter your colloege or school name"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, college: event.target.value })
                        )
                    }
                />
            </div>
            <div className={StyleSheet.row}>
                <InputControl
                    Lable="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value })
                        )
                    }
                />

                <InputControl
                    Lable="Last date of work"
                    type="date"
                    placeholder="Enter last date of this education"
                    value={values.lastDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, lastDate: event.target.value })
                        )
                    }
                />
            </div>
        </div>
    );

    const achievmentsBody = (
        <div className={StyleSheet.detail}>
            <div className={StyleSheet.coloum}>
                <label>List your achievments</label>
                <InputControl placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)} />
                <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );
    const summaryBody = (
        <div className={StyleSheet.detail}>
            <InputControl
                Lable="Summary"
                placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, summary: event.target.value })
                    )
                }
            />
        </div>
    );
    const otherBody = (
        <div className={StyleSheet.detail}>
            <InputControl
                Lable="Other"
                placeholder="Enter something"
                value={values.other}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, other: event.target.value })
                    )
                }
            />
        </div>
    );
    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievement: return achievmentsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;
            default: return null;
        }
    };
    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                }
                props.setInformation((prev) => ({
                    ...prev, [sections.basicInfo]:
                        { ...prev[sections.basicInfo], detail: tempDetail, sectionTitle, },
                }));
                break;
            }

            case sections.workExp: {
                const tempDetail = {
                    title: values.title,
                    certificationlink: values.certificationlink,
                    startDate: values.startDate,
                    lastDate: values.lastDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                }
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev, [sections.workExp]:
                        { ...prev[sections.workExp], details: tempDetails, sectionTitle, },
                }));
                break;
            }

            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    startDate: values.startDate,
                    lastDate: values.lastDate,
                    college: values.college,

                }
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev, [sections.education]:
                        { ...prev[sections.education], details: tempDetails, sectionTitle, },
                }));
                break;
            }
            case sections.project: {
                const tempDetail = {
                    deployedLink: values.deployedLink,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                }
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({
                    ...prev, [sections.project]:
                        { ...prev[sections.project], details: tempDetails, sectionTitle, },
                }));
                break;
            }
            case sections.achievement: {
                const tempPoints = values.points;
                props.setInformation((prev) => ({
                    ...prev, [sections.achievement]:
                        { ...prev[sections.achievement], points: tempPoints, sectionTitle, },
                }));
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;
                props.setInformation((prev) => ({
                    ...prev, [sections.summary]:
                        { ...prev[sections.summary], detail: tempDetail, sectionTitle, },
                }));
                break;
            }
            case sections.other: {
                const tempDetail = values.other;
                props.setInformation((prev) => ({
                    ...prev, [sections.other]:
                        { ...prev[sections.other], detail: tempDetail, sectionTitle, },
                }));
                break;
            }
        }
    };
    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
            college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            deployedLink: activeInfo?.details ? activeInfo.details[0]?.deployedLink || "" : "",
            startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
            lastDate: activeInfo?.details ? activeInfo.details[0]?.lastDate || "" : "",
            certificationlink: activeInfo?.details ? activeInfo.details[0]?.certificationlink || "" : "",
            companyName: activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
            location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
            points: activeInfo?.details ? activeInfo.details[0]?.points ? [...activeInfo?.details[0]?.points] : "" : activeInfo?.points ? [...activeInfo.points] : "",
            title: activeInfo?.details ? activeInfo.details[0]?.title || "" : activeInfo?.detail?.title || ""  ,
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details ? activeInfo.details[0]?.github || "" : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary: typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
            other: typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
        });
    }, [activeSectionKey]);
    const handleAddNew = () => {
        const details = activeInformation?.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;

        details?.push({});
        props.setInformation(prev => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex(details?.length - 1);
    }

    const handleDeleteDeatils = (index) => {
        const details = activeInformation?.details ? [...activeInformation?.details] : "";
        if (!details) return;
        details.splice(index, 1)
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);

    useEffect(() => {
        const details = activeInformation?.details
        if (!details) return
        const activeInfo = information[sections[activeSectionKey]];
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            link: activeInfo.details[activeDetailIndex]?.link || "",
            certificationlink: activeInfo.details[activeDetailIndex]?.certificationlink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            lastDate: activeInfo.details[activeDetailIndex]?.lastDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            college: activeInfo.details[activeDetailIndex]?.college || "",
            deployedLink: activeInfo.details[activeDetailIndex]?.deployedLink || "",
            phone: activeInfo.details[activeDetailIndex]?.phone || "",


        })
    }, [activeDetailIndex])  
    return (<div className={StyleSheet.container}>
        <div className={StyleSheet.header}>
            {Object.keys(sections)?.map((key) => (
                <div
                    className={` ${StyleSheet.section}  ${activeSectionKey === key ? StyleSheet.active : ""}`}
                    key={key}
                    onClick={() => setactiveSectionKey(key)}>
                    {sections[key]}
                </div>
            ))}
        </div>
        <div className={StyleSheet.body}>
            <InputControl Lable="Title" placeholder="Enter section title"
                value={sectionTitle}
                onChange={(event) => setSectionTitle(event.target.value)} />
            <div className={StyleSheet.chips}>
                {
                    activeInformation?.details ?
                        activeInformation?.details?.map((item, index) => (
                            <div className={`${StyleSheet.chip} ${activeDetailIndex === index ? StyleSheet.active : ""}`}
                                key={item.title+index}
                                onClick={() => setActiveDetailIndex(index)}
                            >
                                <p>
                                    {sections[activeSectionKey]} {index + 1}
                                </p>
                                <X onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteDeatils(index)
                                }
                                } />
                            </div>
                        ))
                        : ""}
                {
                    activeInformation?.details && activeInformation?.details?.length > 0 ? (
                        <div className={StyleSheet.new} onClick={handleAddNew}>+New</div>
                    ) : (
                        ""
                    )
                }
            </div>
            {generateBody()}
            <button onClick={handleSubmission}>Save</button>
        </div>
    </div>
    );
}

export default Editor;
