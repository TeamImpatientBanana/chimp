/** MAKE SURE THIS FILE IS INCLUDED AFTER JQUERY.
 * This file contains some jQuery in its functions and runs stable on JQuery 1.11.1
 * To contributors:
 *     The following arrays contain the names AND links to the buzzwords, nouns, and technologies used.
 *     Feel free to refine the existing list and/or add new items to the lists. Make sure to keep the same
 *     format throughout the arrays. Also, make sure that the word you are adding actually makes sense grammatically
 *     if it were to be used in the idea sentence
 */

// The array that contains the list of buzzwords and their respective links
// Make sure to add "a" or "an" before the word
var buzzwords = [
    ['a 3D','http://en.wikipedia.org/wiki/3D'],
    ['a back-end','http://www.techopedia.com/definition/1405/back-end-system'],
    ['a big data', 'http://www.techopedia.com/definition/27745/big-data'],
    ['a blockchain-based','http://www.techopedia.com/definition/30246/blockchain'],
    ['a collaborative','http://www.techopedia.com/definition/4927/web-collaboration'],
    ['a cross-platform','http://www.techopedia.com/definition/17056/cross-platform'],
    ['a crowdsourced','http://www.techopedia.com/definition/27816/crowdsourcing'],
    ['a modular','http://www.techopedia.com/definition/24771/modular'],
    ['a peer-to-peer','http://en.wikipedia.org/wiki/Peer-to-peer'],
    ['a scalable','http://www.techopedia.com/definition/9269/scalability'],
    ['a secure','http://www.techopedia.com/definition/23548/internet-security'],
    ['a social','http://www.techopedia.com/definition/23759/social-platform'],
    ['a software as a service','http://www.techopedia.com/definition/155/software-as-a-service-saas'],
    ['a wearable','http://www.techopedia.com/definition/16339/wearable-computer'],
    ['an immersive', 'http://dictionary.reference.com/browse/immersive']
];

// The array that contains the list of nouns and their respective links
var nouns = [

    //Fix these links - should lead to something better than Wikipedia

    //Platforms
    ['Android app', 'http://developer.android.com/index.html'],
    ['Chrome app', 'https://developer.chrome.com/apps/first_app'],
    ['Chrome extension', 'https://developer.chrome.com/extensions/getstarted'],
    ['Firefox extension', 'https://developer.mozilla.org/en-US/Add-ons'],
    ['Firefox OS app', 'https://developer.mozilla.org/en-US/Apps/Build/installable_apps_for_Firefox_OS'],
    ['Google Cardboard app', 'https://developers.google.com/cardboard/overview'],
    ['Google Glass app', 'https://developers.google.com/glass/'],
    ['iPhone app', 'http://en.wikipedia.org/wiki/App_Store_(iOS)'],
    ['Leap Motion app', 'https://developer.leapmotion.com/'],
    ['Myo app', 'https://developer.thalmic.com/'],
    ['Occulus Rift app', 'https://developer.oculus.com/'],
    ['Pebble app', 'https://developer.getpebble.com/'],
    ['web app', 'https://developer.apple.com/programs/ios/'],
    ['Windows Phone app', 'https://dev.windows.com/en-us'],

    //Types
    ['application', 'http://en.wikipedia.org/wiki/Application_software'],
    ['game', 'http://en.wikipedia.org/wiki/Game'],
    ['operating system', 'http://en.wikipedia.org/wiki/Operating_system']
];

// The array that contains the list of technologies and their respective links
var techs = [
    //APIs
    ['Bitpay API', 'https://bitpay.com/api'],
    ['Coinbase API', 'https://www.coinbase.com/docs/api/overview'],
    ['Facebook API', 'https://www.bento.io/facebook'],
    ['Foursquare API', 'https://www.bento.io/foursquare'],
    ['GitHub API', 'https://developer.github.com/v3/'],
    ['lob API', 'https://www.bento.io/lob'],
    ['Mandrill API', 'https://www.bento.io/mandrill'],
    ['SalesForce API', 'http://www.salesforce.com/us/developer/docs/api/index.htm'],
    ['Sendgrid API', 'https://www.bento.io/sendgrid'],
    ['Shirts.io API', 'https://www.bento.io/shirts.io'],
    ['Stripe API', 'https://www.bento.io/stripe'],
    ['Twilio API', 'https://www.bento.io/twilio'],
    ['Twitter API', 'https://dev.twitter.com/overview/documentation'],
    //tools
    ['Twitter Fabric', 'https://dev.twitter.com/products/fabric'],
    //languages
    ['.NET', 'https://www.bento.io/.net'],
    ['C#', 'https://www.bento.io/c-sharp'],
    ['Clojure', 'https://www.bento.io/clojure'],
    ['Dart', 'https://www.bento.io/dart'],
    ['Go', 'https://www.bento.io/go'],
    ['Groovy', 'https://www.bento.io/groovy'],
    ['Haskell', 'http://learnyouahaskell.com/'],
    ['Java', 'https://www.bento.io/java'],
    ['JavaScript', 'https://www.bento.io/javascript'],
    ['JQuery', 'https://www.bento.io/jquery'],
    ['Objective-C', 'https://www.bento.io/objective-c'],
    ['Perl', 'https://www.bento.io/perl'],
    ['PHP', 'https://www.bento.io/php'],
    ['Python', 'https://www.bento.io/python'],
    ['Ruby', 'https://www.bento.io/ruby'],
    ['Scala', 'https://www.bento.io/scala'],
    ['Swift', 'https://www.bento.io/swift'],
    //stack pieces
    ['CouchDB', 'https://www.bento.io/couchdb'],
    ['MongoDB', 'https://www.bento.io/mongo'],
    //Frameworks, etc
    ['AngularJS', 'https://www.bento.io/angular'],
    ['Backbone.js', 'https://www.bento.io/backbone'],
    ['Bootstrap', 'https://www.bento.io/bootstrap'],
    ['Bottle', 'https://www.bento.io/bottle'],
    ['CakePHP', 'https://www.bento.io/cakephp'],
    ['CodeIgniter', 'https://www.bento.io/codeigniter'],
    ['Django', 'https://www.bento.io/django'],
    ['Elixir', 'https://www.bento.io/elixir'],
    ['Ember', 'https://www.bento.io/ember'],
    ['Express', 'https://www.bento.io/express'],
    ['Flask', 'https://www.bento.io/flask'],
    ['Flight', 'https://www.bento.io/flight'],
    ['Jade', 'https://www.bento.io/jade'],
    ['Laravel', 'https://www.bento.io/laravel'],
    ['LESS', 'https://www.bento.io/less'],
    ['Meteor', 'https://www.bento.io/meteor'],
    ['Phalcon', 'https://www.bento.io/phalcon'],
    ['PHPixie', 'https://www.bento.io/phpixie'],
    ['Play', 'https://www.bento.io/play'],
    ['react.js', 'http://facebook.github.io/react/'],
    ['Ruby on Rails', 'https://www.bento.io/rails'],
    ['Sass', 'https://www.bento.io/sass'],
    ['Symfony', 'https://www.bento.io/symfony'],
    ['Tornado', 'https://www.bento.io/tornado'],
    ['Twig', 'https://www.bento.io/twig'],
    ['uilang', 'https://www.bento.io/uilang'],
    ['Underscore.js', 'https://www.bento.io/underscore'],
    ['Yii', 'https://www.bento.io/yii']

];

// The function that returns a random index of an array.
function randomize (arrayToRandomize) {
    return Math.floor(Math.random() * arrayToRandomize.length);
}

// Function for generating a buzzword that returns the name and the link.
// Access the name by generatedBuzzword.name and the link by generatedBuzzword.link
function generateBuzzWord() {
    var rand = randomize(buzzwords);
    // Return multiple values as JSON to access easily
    return {
        name: buzzwords[rand][0],
        link: buzzwords[rand][1]
    };
}

// This function generates a name for the project using the Foswig function. Make sure to include foswig.js before this file in index.html
function generateName() {
    chain = new Foswig(3);
    chain.addWordsToChain(dictionary);
    return chain.generateWord(5,10,true);
}

// This function will generate the nouns based on the array above. Much simpler than the others
function generateNoun() {
    var rand = randomize(nouns);
    // Return multiple values as JSON to access easily
    return {
        name: nouns[rand][0],
        link: nouns[rand][1]
    };
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
    // Return multiple values as JSON to access easily
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
    if ($(".fa-rocket:visible")) {
        $('.fa-rocket').hide();
        $('.fa-refresh').show();
    }
    else if ($(".fa-refresh:visible")) {
        $('.fa-refresh').hide();
        $('.fa-rocket').show();
    }

    // Generate name and insert text
    var generatedName = generateName();
    $("#ideaName").text(generatedName);

    // Generate buzz word and insert text
    var generatedBuzzWord = generateBuzzWord();
    $("#ideaBuzzWord").html("<a href='" + generatedBuzzWord.link + "' target='_blank'>" + generatedBuzzWord.name + "</a>");

    // Generate noun and insert text
    var generatedNoun = generateNoun();
    $("#ideaNoun").html("<a href='" + generatedNoun.link + "' target='_blank'>" + generatedNoun.name + "</a>");

    // Generate tech words then insert both into text
    var generatedTechs = generateTechs();
    $("#ideaTech1").html("<a href='" + generatedTechs.tech1.link + "' target='_blank'>" + generatedTechs.tech1.name + "</a>");
    $("#ideaTech2").html("<a href='" + generatedTechs.tech2.link + "' target='_blank'>" + generatedTechs.tech2.name + "</a>");

    //Make the Twitter button have your idea in the text
    $("#twitter-share-button").attr("href", "https://twitter.com/intent/tweet?original_referer=&text=This%20%23hackathon%20I%27m%20going%20to%20make%20"+generatedName+"%2C%20"+generatedBuzzWord.name+"%20"+generatedNoun.name+"%20using%20"+generatedTechs.tech1.name+"%20and%20"+generatedTechs.tech2.name+"%2C%20thanks%20%40impatientbanana!");
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
    var wind = $(window).height();
    $("#jumbotron").height(wind);
    $("#generatorContainer").height(wind);
}




// The values for counterBuzzwords, counterNouns, counterTechs1, counterTechs2, counterNames NEED to be defined in index.html because of the nature of the setInterval function using this function
function loopThroughArrays() {

    // Show
    $("#ideaName").text(dictionary[counterNames]);
    $("#ideaBuzzWord").text(buzzwords[counterBuzzwords][0]);
    $("#ideaNoun").text(nouns[counterNouns][0]);
    $("#ideaTech1").text(techs[counterTechs1][0]);
    $("#ideaTech2").text(techs[counterTechs2][0]);

    // Loop through buzzwords
    counterBuzzwords = counterBuzzwords++;
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
    if (counterNames == dictionary.length) {
        counterNames = 0;
    }
}