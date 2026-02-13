export enum RouteSegment {
  HOME = "",
  ABOUT = "about",
  SKILLS = "skills",
  CERTIFICATIONS = "certifications",
  ARTICLES = "articles",
  EXPERIENCE = "experience",
  PROJECTS = "projects",
  CONTACT = "contact"
}

export enum Routes {
  HOME = `/${RouteSegment.HOME}`,
  ABOUT = `/${RouteSegment.ABOUT}`,
  SKILLS = `/${RouteSegment.SKILLS}`,
  CERTIFICATIONS = `/${RouteSegment.CERTIFICATIONS}`,
  ARTICLES = `/${RouteSegment.ARTICLES}`,
  EXPERIENCE = `/${RouteSegment.EXPERIENCE}`,
  PROJECTS = `/${RouteSegment.PROJECTS}`,
  CONTACT = `/${RouteSegment.CONTACT}`
}
