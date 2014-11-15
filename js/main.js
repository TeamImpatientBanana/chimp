var buzzwords = [
    ['a bleeding edge', 'http://www.techopedia.com/definition/23222/bleeding-edge'],
    ['a big data', 'http://www.techopedia.com/definition/27745/big-data'],
    ['a folksonomy','http://www.techopedia.com/definition/30196/folksonomy'],
    ['an HTML5','http://www.techopedia.com/definition/1891/html5'],
    ['a cross-platform','http://www.techopedia.com/definition/17056/cross-platform'],
    ['a secure','http://www.techopedia.com/definition/23548/internet-security'],
    ['a data mining','http://www.techopedia.com/definition/1181/data-mining'],
    ['a social','http://www.techopedia.com/definition/23759/social-platform'],
    ['an e-learning','http://www.techopedia.com/definition/2544/web-based-training-wbt'],
    ['a performant','http://www.techopedia.com/definition/28231/performant'],
    ['a podcasting','http://www.techopedia.com/definition/5546/podcast'],
    ['a content management','http://www.techopedia.com/definition/24075/content-management-system-cms'],
    ['a DRM','http://www.techopedia.com/definition/3986/digital-rights-management-drm'],
    ['a modular','http://www.techopedia.com/definition/24771/modular'],
    ['a virtualized','http://www.techopedia.com/definition/719/virtualization'],
    ['an AJAX','http://www.techopedia.com/definition/24402/asynchronous-javascript-and-xml-ajax'],
    ['a crowdsourced','http://www.techopedia.com/definition/27816/crowdsourcing'],
    ['a back-end','http://www.techopedia.com/definition/1405/back-end-system'],
    ['a front-end', 'http://www.techopedia.com/definition/3799/front-end-system'],
    ['a sustainable','http://www.techopedia.com/definition/14753/green-computing'],
    ['a startup','http://www.techopedia.com/definition/13337/startup-business'],
    ['a software as a service','http://www.techopedia.com/definition/155/software-as-a-service-saas'],
    ['a scalable','http://www.techopedia.com/definition/9269/scalability'],
    ['a skeuomorphic','http://www.techopedia.com/definition/28955/skeuomorphism'],
    ['a social bookmarking','http://www.techopedia.com/definition/424/social-software'],
    ['a viral','http://www.techopedia.com/definition/5577/viral'],
    ['a responsive','http://www.techopedia.com/definition/30004/responsive-web-design-rwd'],
    ['an algorithmic','http://www.techopedia.com/definition/3739/algorithm'],
    ['a collaborative','http://www.techopedia.com/definition/4927/web-collaboration'],
    ['a mobile','http://www.techopedia.com/definition/2953/mobile-application-mobile-app'],
    ['a cloud-based','http://www.techopedia.com/definition/2/cloud-computing'],
    ['a robust','http://dictionary.reference.com/browse/robust'],
    ['an immersive', 'http://dictionary.reference.com/browse/immersive'],
    ['a wearable','http://www.techopedia.com/definition/16339/wearable-computer'],
    ['a content rich','http://www.techopedia.com/definition/2531/rich-internet-application-ria'],
    ['a seamless','http://dictionary.reference.com/browse/seamless'],
    ['a re-purposed','http://dictionary.reference.com/browse/re-purposed'],
    ['a quick-and-dirty','http://dictionary.reference.com/browse/quick%20and%20dirty'],
    ['an ephemeral','http://dictionary.reference.com/browse/ephemeral'],
    ['a blockchain-based','http://www.techopedia.com/definition/30246/blockchain'],
    ['a cutting-edge','http://www.techopedia.com/definition/26589/cutting-edge-technology'],
    ['a digitized','http://www.techopedia.com/definition/6846/digitization'],
    ['a future proof','http://www.techopedia.com/definition/2204/future-proof'],
    ['a RESTful','http://www.techopedia.com/definition/1312/representational-state-transfer-rest'],
    ['a dynamic','http://dictionary.reference.com/browse/dynamic'],
    ['a cut-and-dried','http://dictionary.reference.com/browse/cut%20and%20dried']
];


function generateName() {

}

// Function for generating a buzzword that returns the name and the link.
// Access the name by generatedBuzzword.name and the link by generatedBuzzword.link
function generateBuzzwordName() {
    rand = Math.floor(Math.random() * buzzwords.length);
    return {
        name: buzzwords[rand][0],
        link: buzzwords[rand][1]
    };
}

function generateNoun() {

}

function generateTechnology1() {

}

function generateTechnology2() {
	
}