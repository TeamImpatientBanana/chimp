// MAKE SURE THIS FILE IS INCLUDED AFTER JQUERY

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

var techs = [
    ['HTML', 'https://www.bento.io/html'],
    ['CSS', 'https://www.bento.io/css'],
    ['JavaScript', 'https://www.bento.io/javascript'],
    ['JQuery', 'https://www.bento.io/jquery'],
    ['SQL', 'https://www.bento.io/sql'],
    ['Python', 'https://www.bento.io/python'],
    ['Flask', 'https://www.bento.io/flask'],
    ['Bootstrap', 'https://www.bento.io/bootstrap'],
    ['JSON', 'https://www.bento.io/json'],
    ['LESS', 'https://www.bento.io/less'],
    ['MongoDB', 'https://www.bento.io/mongo'],
    ['CouchDB', 'https://www.bento.io/couchdb'],
    ['uilang', 'https://www.bento.io/uilang'],
    ['AngularJS', 'https://www.bento.io/angular'],
    ['Sass', 'https://www.bento.io/sass'],
    ['Jade', 'https://www.bento.io/jade'],
    ['Django', 'https://www.bento.io/django'],
    ['Express', 'https://www.bento.io/express'],
    ['Tornado', 'https://www.bento.io/tornado'],
    ['Bottle', 'https://www.bento.io/bottle'],
    ['Java', 'https://www.bento.io/java'],
    ['Go', 'https://www.bento.io/go'],
    ['Ruby', 'https://www.bento.io/ruby'],
    ['Ruby on Rails', 'https://www.bento.io/rails'],
    ['Scala', 'https://www.bento.io/scala'],
    ['Play', 'https://www.bento.io/play'],
    ['Elixir', 'https://www.bento.io/elixir'],
    ['Swift', 'https://www.bento.io/swift'],
    ['Objective-C', 'https://www.bento.io/objective-c'],
    ['Flight', 'https://www.bento.io/flight'],
    ['Meteor', 'https://www.bento.io/meteor'],
    ['Ember', 'https://www.bento.io/ember'],
    ['Backbone.js', 'https://www.bento.io/backbone'],
    ['Underscore.js', 'https://www.bento.io/underscore'],
    ['Dart', 'https://www.bento.io/dart'],
    ['PHP', 'https://www.bento.io/php'],
    ['Laravel', 'https://www.bento.io/laravel'],
    ['Phalcon', 'https://www.bento.io/phalcon'],
    ['Symfony', 'https://www.bento.io/symfony'],
    ['CodeIgniter', 'https://www.bento.io/codeigniter'],
    ['CakePHP', 'https://www.bento.io/cakephp'],
    ['Yii', 'https://www.bento.io/yii'],
    ['Twig', 'https://www.bento.io/twig'],
    ['PHPixie', 'https://www.bento.io/phpixie'],
    ['Groovy', 'https://www.bento.io/groovy'],
    ['Clojure', 'https://www.bento.io/clojure'],
    ['XML', 'https://www.bento.io/xml'],
    ['Firebase', 'https://www.bento.io/firebase'],
    ['Perl', 'https://www.bento.io/perl'],
    ['C#', 'https://www.bento.io/c-sharp'],
    ['.NET', 'https://www.bento.io/.net'],
    ['Shirts.io', 'https://www.bento.io/shirts.io']
];

var nouns = [
    ['application', 'http://en.wikipedia.org/wiki/Application_software'] ,
    ['game', 'http://en.wikipedia.org/wiki/Game'],
    ['operating system', 'http://en.wikipedia.org/wiki/Operating_system'],
    ['user interface', 'http://en.wikipedia.org/wiki/User_interface'],
    ['calculator', 'http://en.wikipedia.org/wiki/Calculator'],
    ['GPS', 'http://en.wikipedia.org/wiki/Global_Positioning_System'],
    ['typography software', 'http://en.wikipedia.org/wiki/Typography'],
    ['menu', 'http://en.wikipedia.org/wiki/Menu_(computing)'],
    ['database system', 'http://en.wikipedia.org/wiki/Database'],
    ['android app', 'http://en.wikipedia.org/wiki/Android_(operating_system)'],
    ['iPhone app', 'http://en.wikipedia.org/wiki/App_Store_(iOS)'],
    ['Windows Phone app', 'http://www.windowsphone.com/en-us/store/app/wikipedia/fd40c569-2681-48df-9ff3-53ffd80aa9b5'],
    ['e-reader', 'http://en.wikipedia.org/wiki/E-reader'],
    ['webapp', 'http://en.wikipedia.org/wiki/Web_application'],
    ['Leap Motion app', 'http://en.wikipedia.org/wiki/Leap_Motion'],
    ['spreadsheet', 'http://en.wikipedia.org/wiki/Spreadsheet'],
    ['mailing list', 'http://en.wikipedia.org/wiki/Electronic_mailing_list'],
    ['image organizer', 'http://en.wikipedia.org/wiki/Image_organizer'],
    ['todo list', 'http://en.wikipedia.org/wiki/Wikipedia:To-do_list']
];


function randomize (arrayToRandomize) {
    return Math.floor(Math.random() * arrayToRandomize.length);
}

// Function for generating a buzzword that returns the name and the link.
// Access the name by generatedBuzzword.name and the link by generatedBuzzword.link
function generateBuzzWord() {
    var rand = randomize(buzzwords);
    return {
        name: buzzwords[rand][0],
        link: buzzwords[rand][1]
    };
}

// This function generates a name for the project using the Foswig function. Make sure to include foswig.js before this file in index.html
function generateName() {
    var data = dictionary;
    chain = new Foswig(3);
    chain.addWordsToChain(data.words);
    return chain.generateWord(5,10,true);
}

// This function will generate the nouns based on the array above. Much simpler than the others
function generateNoun() {
    var rand = randomize(nouns);
    return nouns[rand][0];
}

// Function for generating technology names, This will return four values: Tech 1 name and link and tech 2 name and link
// Access name and link of tech 1 by generatedTech.tech1.name and generatedTech.tech1.link. Same notation for tech 2.
function generateTechs() {
    var rand1 = randomize(techs);
    var rand2 = randomize(techs);

    // If rand2 happens to equal rand1, calculate it until it doesn't
    while (rand1 == rand2) {
        rand2 = randomize(techs);
    }
    return {
        tech1 : {
            name: techs[rand1][0],
            link: techs[rand1][1]
        },
        tech2 : {
            name: techs[rand2][0],
            link: techs[rand2][1]
        }
    }
}

// Button click event when the chevron is clicked
function clickGenerateButton() {

    // Replace the go button with a replay button
    $('.fa-rocket').hide();
    $('.fa-refresh').show();

    // Generate name and insert text
    var generatedName = generateName();
    $("#ideaName").text(generatedName);

    // Generate buzz word and insert text
    var generatedBuzzWord = generateBuzzWord();
    $("#ideaBuzzWord").text(generatedBuzzWord.name);

    // Generate noun and insert text
    var generatedNoun = generateNoun();
    $("#ideaNoun").text(generatedNoun);

    // Generate tech words then insert both into text
    var generatedTechs = generateTechs();
    $("#ideaTech1").text(generatedTechs.tech1.name);
    $("#ideaTech2").text(generatedTechs.tech2.name);

    //Make the Twitter button have your idea in the text
    $("#twitter-share-button").attr("href", "https://twitter.com/intent/tweet?original_referer=&text=This%20%23hackathon%20I%27m%20going%20to%20make%20"+generatedName+"%2C%20"+generatedBuzzWord.name+"%20"+generatedNoun+"%20using%20"+generatedTechs.tech1.name+"%20and%20"+generatedTechs.tech2.name+"%2C%20thanks%20%40impatientbanana%20for%20the%20idea!");
}

// This is the function that animates the scrolling down when the chevron is clicked
function animateScrolling() {
    $('html, body').animate({
        scrollTop: $("#generatorContainer").offset().top
    }, 1000);
}

// This function will change each divs heights according to the viewport size when the window is resized
function resizeListener() {
    // This will execute whenever the window is resized
    var w = $(window).height();
    $("#jumbotron").height(w);
    $("#generatorContainer").height(w);
}

// The values for counterBuzzwords, counterNouns, counterTechs1, counterTechs2, counterNames NEED to be defined in index.html because of the nature of the setInterval function using this function
function loopThroughArrays() {
    // Loop through everything, literally

    $("#ideaName").text(dictionary.words[counterNames]);
    $("#ideaBuzzWord").text(buzzwords[counterBuzzwords][0]);
    $("#ideaNoun").text(nouns[counterNouns][0]);
    $("#ideaTech1").text(techs[counterTechs1][0]);
    $("#ideaTech2").text(techs[counterTechs2][0]);

    // Loop through buzzwords
    counterBuzzwords = ++counterBuzzwords;
    if (counterBuzzwords == nouns.length) {
        counterBuzzwords = 0;
    }
    // Loop through nouns
    counterNouns = ++counterNouns;
    if (counterNouns == nouns.length) {
        counterNouns = 0;
    }
    // Loop through techs (k is tech 1, l is tech 2)
    counterTechs1 = ++counterTechs1;
    if (counterTechs1 == techs.length) {
        counterTechs1 = 0;
    }
    counterTechs2 = ++counterTechs2;
    if (counterTechs2 == techs.length) {
        counterTechs2 = 0;
    }
    // Loop through dictionary of names
    counterNames = ++counterNames;
    if (counterNames == dictionary.words.length) {
        counterNames = 0;
    }
    // VERY IMPORTANT: var generateButtonIsClicked needs to be defined outside of the scope of this function as a boolean. Define it in index.html
    /*
    if (generateButtonIsClicked == true) {
        break;
    }
    */
}