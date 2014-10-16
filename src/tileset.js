/* TileSet Class
 * Loads tile sets
 */

var uuid = require('node-uuid');
var _ = require('underscore');

var TileSet = function (opts) {
	opts = _.defaults(opts, {
		name: 'Tile Set',
		tileSize: 8,
		image: new Image(),
		margin: 0,
		spacing: 0
	});
	_.extend(this, opts);
	this.id = uuid.v4();
};

TileSet.prototype.load = function (imgURL) {
	this.image.src = imgURL;
};

module.exports = TileSet;