var trieNode = function(value) {
    this.val = value;
    this.isEnd = false;
    this.children = {};

}
var Trie = function(value = null) {
    this.root = new trieNode();
  };
  
  Trie.prototype.insert = function(word) {
    let currNode = this.root;
    for (let letter of word) {
        if (!currNode.children[letter])
            currNode = currNode.children[letter] = new trieNode(letter);
        else
            currNode = currNode.children[letter];
    }
    currNode.isEnd = true;
  };
  
  Trie.prototype.search = function(word, isPrefix=false) {
    let currNode = this.root;
    for (let letter of word) {
        if (!currNode.children[letter])
            return false;
        else
            currNode = currNode.children[letter];
    }
    return (isPrefix)?true:currNode.isEnd;
  };
  
  Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
  };
