export const navLink = [
    {name:"Home", to:"/"},
    {name:"Sign In", to:'/sign-in'},
    {name:"Dashboard", to:'/dashboard'},
    {name:"Result", to:"/result"}
]


export const getNavLinkByName = (name) => {
    return (
        navLink.find(link => link.name ===name).to
    );
}


export const homeLink = getNavLinkByName('Home');
export const signInLink = getNavLinkByName('Sign In');
export const dashboardLink = getNavLinkByName('Dashboard');
export const resultsLink = getNavLinkByName('Result');

export const dashboardPages = [dashboardLink, resultsLink];