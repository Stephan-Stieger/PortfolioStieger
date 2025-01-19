import {parse} from "node-html-parser";

declare global {
    interface String {
        removePart(partToRemove: string): string;
    }
}

String.prototype.removePart = function (partToRemove: string): string {
    return this.replace(partToRemove, '');
};

function getPathOfAListOfComponents(allPages:any):string[]{
    let paths:string[]=[]
    allPages.map((item:any) => {
        let fullPath=item.url
        fullPath=fullPath.removePart('.mdx')
        let path=fullPath.split("/").pop()
        paths.push(path)
    })
    return paths
}

async function getPathAndTitleOfAListOfComponents(allPages: any): Promise<{ path: string, title: string }[]> {
    let pathsAndTitles: { path: string, title: string }[] = [];
    allPages.map((item:any) => {
        let fullPath=item.url
        fullPath=fullPath.removePart('.mdx')
        let path=fullPath.split("/").pop()
        console.log(item)
        pathsAndTitles.push({path: path, title: ""})
    })
    return pathsAndTitles;
}

function getPathFromModuleId(moduleId:string):string{
    let path=moduleId.split("/").pop()
    if (path===undefined || path.includes('index')){
        return ""
    }
    else {
        return path.removePart('.astro')
    }

}

export {
    getPathOfAListOfComponents,
    getPathAndTitleOfAListOfComponents,
    getPathFromModuleId
}