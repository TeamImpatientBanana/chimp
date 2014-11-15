function generateName() {
	var data = JSON.parse(dictionary);
	chain = new foswig.MarkovChain(3);
	chain.addWordsToChain(data.words);
	var randomWord = chain.generateWord(5,10,true);
}