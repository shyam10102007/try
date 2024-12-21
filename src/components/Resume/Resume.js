import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AtSign, Calendar, MapPin, Paperclip, Phone, Linkedin, GitHub } from "react-feather";
import StyleSheet from './Resume.module.css';
const Resume = forwardRef((props, ref) => {
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();
    const [columns, setColumns] = useState([[], []]);
    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")
    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
    }

    const getFormattedDate = (value) => {
        if (!value) return ""
        const date = new Date(value);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const sectionsDiv = {
        [sections.workExp]:( <div key={"workExp"}
            draggable
            onDragOver={() => setTarget(info.workExp?.id)}
            onDragEnd={() => setSource(info.workExp?.id)}
            className={`${StyleSheet.section} ${info.workExp?.sectionTitle ? "" : StyleSheet.hidden}`}>
            <div className={StyleSheet.sectionTitle}>{info.workExp.sectionTitle}</div>
            <div className={StyleSheet.content}>
                {
                    info.workExp?.details?.map((item) => (

                        <div className={StyleSheet.item} key={item.title}>
                            {
                                item.title &&
                                <p className={StyleSheet.title}>{item.title}</p>
                            }
                            {
                                item.companyName &&
                                <p className={StyleSheet.subTitle}>{item.companyName}</p>
                            }
                            {
                                item.certificationLink &&
                                <a className={StyleSheet.link} href={item.certificationLink}>
                                    <Paperclip />
                                    {item.certificationLink}
                                </a>
                            }

                            {
                                item.startDate && item.lastDate ? (

                                    <div className={StyleSheet.date}>
                                        <Calendar /> {" "}
                                        {getFormattedDate(item.startDate)} -
                                        {getFormattedDate(item.lastDate)}
                                    </div>
                                ) : ("")
                            }
                            {
                                item.location &&
                                <p className={StyleSheet.date}>
                                    <MapPin />Remote</p>
                            }

                            {
                                item.points?.length > 0 &&
                                <ul className={StyleSheet.points}>
                                    {
                                        item.points?.map((elem, index) => (

                                            <li className={StyleSheet.point} key={elem + index}>{elem}</li>
                                        ))}
                                </ul>
                            }
                        </div>
                    ))}
            </div>
        </div>),
        [sections.project]:( <div key={"project"}
            draggable
            onDragOver={() => setTarget(info.project?.id)}
            onDragEnd={() => setSource(info.project?.id)}
            className={`${StyleSheet.section} ${info.project?.sectionTitle ? "" : StyleSheet.hidden}`}>
            <div className={StyleSheet.sectionTitle}>{info.project.sectionTitle}</div>
            <div className={StyleSheet.content}>
                {
                    info.project?.details?.map(item =>
                        <div className={StyleSheet.item}>
                            {
                                item.title &&
                                <p className={StyleSheet.title}>{item.title}</p>
                            }
                            {
                                item.link && (
                                    <a className={StyleSheet.link} href={item.link} >
                                        <Paperclip />
                                        {item.link}
                                    </a>

                                )}

                            {
                                item.GitHub && (
                                    <a className={StyleSheet.link} href={item.GitHub}>
                                        <GitHub />
                                        {item.GitHub}
                                    </a>
                                )}
                            {
                                item.overview && (
                                    <p className={StyleSheet.overview}>{item.overview}</p>
                                )}

                            {
                                item.points?.length > 0 &&
                                <ul className={StyleSheet.points}>
                                    {
                                        item.points?.map((elem, index) => (

                                            <li className={StyleSheet.point} key={elem + index}>{elem}</li>
                                        ))}
                                </ul>
                            }
                        </div>

                    )}
            </div>
        </div>),
        [sections.education]: (
            <div key={"education"}
                draggable
                onDragOver={() => setTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
                className={`${StyleSheet.section} ${info.education?.sectionTitle ? "" : StyleSheet.hidden}`}>
                <div className={StyleSheet.sectionTitle}>{info.education?.sectionTitle}</div>
                <div className={StyleSheet.content}>
                    {
                        info.education?.details?.map(item => 
                            <div className={StyleSheet.item} key={item.title}> 
                                {
                                    item.title &&
                                    <p className={StyleSheet.title}>{item.title}</p>
                                }
                                {
                                    item.college &&
                                    <p className={StyleSheet.subTitle}>{item.college}</p>
                                }
                                {
                                    item.startDate && item.lastDate ? (
                                        <div className={StyleSheet.date}>
                                            <Calendar /> {" "}
                                            {getFormattedDate(item.startDate)} -
                                            {getFormattedDate(item.lastDate)}
                                        </div>
                                    ) : ("")
                                }
                            </div>
                        )}

                        
                </div>
            </div>
        )
        ,
        [sections.achievement]: (<div key={"achievement"}
            draggable
            onDragOver={() => setTarget(info.achievement?.id)}
            onDragEnd={() => setSource(info.achievement?.id)}
            className={`${StyleSheet.section} ${info.achievement?.sectionTitle ? "" : StyleSheet.hidden}`}>
            <div className={StyleSheet.sectionTitle}>{info.achievement?.sectionTitle}</div>
            <div className={StyleSheet.content}>
                {
                    info.achievement?.points?.length > 0 && (
                        <ul className={StyleSheet.points}>
                            {
                                info.achievement?.points?.map((elem, index) => (
                                    <li className={StyleSheet.point} key={elem + index}>{elem}</li>
                                ))}
                        </ul>
                    )}
            </div>
        </div>),
        [sections.summary]: (<div key={"summary"}
            draggable
            onDragOver={() => setTarget(info.summary?.id)}
            onDragEnd={() => setSource(info.summary?.id)}
            className={`${StyleSheet.section} ${info.summary?.sectionTitle ? "" : StyleSheet.hidden}`}>
            <div className={StyleSheet.sectionTitle}>{info.summary?.sectionTitle}</div>
            <div className={StyleSheet.content}>
                <div className={StyleSheet.overview}>
                    <p className={StyleSheet.summary}>{info.summary?.detail}</p>
                </div>

            </div>
        </div>),
        [sections.other]:( <div key={"other"}
            draggable
            onDragOver={() => setTarget(info.other?.id)}
            onDragEnd={() => setSource(info.other?.id)}
            className={`${StyleSheet.section} ${info.other?.sectionTitle ? "" : StyleSheet.hidden}`}>
            <div className={StyleSheet.sectionTitle}>{info.other?.sectionTitle}</div>
            <div className={StyleSheet.content}>
                <div className={StyleSheet.overview}>
                    <p>{info.other?.detail}</p>
                </div>
            </div>
        </div>),
    }
    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...columns[0]], [...columns[1]]];
        let sourceRowIndex = tempColumns[0].findIndex(item => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
            sourceColumnIndex = 1;
            sourceRowIndex = tempColumns[1].findIndex(item => item === source)
        }
        let targetRowIndex = tempColumns[0].findIndex(item => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
            targetColumnIndex = 1;
            targetRowIndex = tempColumns[1].findIndex(item => item === target)
        }

        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex]
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource

        setColumns(tempColumns)

    };
    useEffect(() => {
        setColumns([
            [sections.project, sections.education, sections.summary],
            [sections.workExp, sections.achievement, sections.other],
        ]);

    }, []);
    useEffect(() => {
        swapSourceTarget(source, target);
    }, [source]);

    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return

        container.style.setProperty('--color', props.activeColor);
    }, [props.activeColor]);
    return (
        <div ref={ref}>
            <div ref={containerRef} className={StyleSheet.container}>
                <div className={StyleSheet.header}>
                    <p className={StyleSheet.heading}>{info.basicInfo?.detail?.name}</p>
                    <p className={StyleSheet.subHeading}>{info.basicInfo?.detail?.title}</p>
                    <div className={StyleSheet.links}>
                        {
                            info.basicInfo?.detail?.email && (
                                <a className={StyleSheet.link} type="email"><AtSign />{info.basicInfo?.detail?.email}</a>
                            )}
                        {
                            info.basicInfo?.detail?.phone && (
                                <a className={StyleSheet.link}><Phone />{info.basicInfo?.detail?.phone}</a>
                            )}
                        {
                            info.basicInfo?.detail?.linkedin && (
                                <a className={StyleSheet.link}><Linkedin />{info.basicInfo?.detail?.linkedin}</a>
                            )}
                        {
                            info.basicInfo?.detail?.github && (
                                <a className={StyleSheet.link}><GitHub />{info.basicInfo?.detail?.github}</a>
                            )
                        }
                    </div>
                </div>
                <div className={StyleSheet.main}>
                    <div className={StyleSheet.col1}>{columns[0].map(item => sectionsDiv[item])}</div>
                    <div className={StyleSheet.col2}>{columns[1].map(item => sectionsDiv[item])}</div>
                </div>
            </div>
        </div>
    );
});
export default Resume;