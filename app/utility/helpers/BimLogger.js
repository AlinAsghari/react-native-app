//import Bugsnag from "@bugsnag/expo";

const log = ( error ) => {
    console.log(JSON.stringify(error))
    //Bugsnag.notify( new Error(error));
}

const start = () => {
    //console.log("logging started...");
    //Bugsnag.start();
}

export default { log, start };
