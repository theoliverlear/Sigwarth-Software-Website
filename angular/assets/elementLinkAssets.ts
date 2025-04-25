import {TargetType} from "../models/html/TargetType";
import {ElementLink} from "../models/link/ElementLink";
import {TextElementLink} from "../models/link/TextElementLink";
import {TagType} from "../models/html/TagType";

export const navBarHomeElementLink = new ElementLink('/',
    TargetType.SELF);

export const aboutElementLink = new TextElementLink('/about',
    TargetType.SELF,
    false,
    'About',
    TagType.H5);

export const projectsElementLink = new TextElementLink('/projects',
    TargetType.SELF,
    false,
    'Projects',
    TagType.H5);

export const contactElementLink = new TextElementLink('/contact',
    TargetType.SELF,
    false,
    'Contact',
    TagType.H5);

export const navBarLinks: TextElementLink[] = [
    aboutElementLink,
    projectsElementLink,
    contactElementLink
];