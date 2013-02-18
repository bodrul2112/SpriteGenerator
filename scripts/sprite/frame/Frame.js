
define(["thirdparty/jquery", "sprite/data/PixelTable"], function(jQuery, PixelTable) {
	
	var Frame = function() {
		this.m_oPixelTable = new PixelTable(16,16);
	}
	
	Frame.prototype.getPixelTable = function() {
		
		return this.m_oPixelTable;
	}
	
	Frame.prototype.getFrameAsHorizontalFlip = function() {
		
	}
	
	Frame.prototype.getFrameAsVerticalFlip = function() {
		
	}
	
	Frame.prototype.setColorAtPixel = function( sColor, nX, nY ) {
		
		this.m_oPixelTable.setColorAtPixel( sColor, nX, nY );
	}
	
	Frame.prototype.render = function(nScaleFactor) {
		
	}
	
	return Frame
	
});