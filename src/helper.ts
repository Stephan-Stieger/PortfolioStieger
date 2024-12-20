interface String {
    removePart(partToRemove: string): string;
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