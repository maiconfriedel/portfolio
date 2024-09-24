/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SkillsImport } from './routes/skills'
import { Route as ProjectsImport } from './routes/projects'
import { Route as AboutMeImport } from './routes/about-me'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SkillsRoute = SkillsImport.update({
  path: '/skills',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const AboutMeRoute = AboutMeImport.update({
  path: '/about-me',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about-me': {
      id: '/about-me'
      path: '/about-me'
      fullPath: '/about-me'
      preLoaderRoute: typeof AboutMeImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/skills': {
      id: '/skills'
      path: '/skills'
      fullPath: '/skills'
      preLoaderRoute: typeof SkillsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about-me': typeof AboutMeRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about-me': typeof AboutMeRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about-me': typeof AboutMeRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about-me' | '/projects' | '/skills'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about-me' | '/projects' | '/skills'
  id: '__root__' | '/' | '/about-me' | '/projects' | '/skills'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutMeRoute: typeof AboutMeRoute
  ProjectsRoute: typeof ProjectsRoute
  SkillsRoute: typeof SkillsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutMeRoute: AboutMeRoute,
  ProjectsRoute: ProjectsRoute,
  SkillsRoute: SkillsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about-me",
        "/projects",
        "/skills"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about-me": {
      "filePath": "about-me.tsx"
    },
    "/projects": {
      "filePath": "projects.tsx"
    },
    "/skills": {
      "filePath": "skills.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
