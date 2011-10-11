var util = require('util'),
    Rest = require('rest.node');

function Readability(key) {
  Rest.call(this, 'https://www.readability.com/api/content/v1');
  this.key = key;
}

util.inherits(Readability, Rest);

Readability.prototype.setRequestOptions = function(options, method, params) {
  params.token = this.key;
  Rest.prototype.setRequestOptions.call(this, options, method, params);
};

Readability.prototype.parse = function(url, callback) {
  this.get('/parser', {url: url}, callback);
};

Readability.prototype.parse_by_id = function(id, callback) {
  this.get('/parser', {id: id}, callback);
};

module.exports = Readability;
