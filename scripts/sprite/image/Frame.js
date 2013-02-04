
define(["thirdparty/jquery", "sprite/data/PixelTable" ], function( jQuery, PixelTable ) {
	
	var Frame = function() {
		
		this.m_oPixelTable = new PixelTable();
		
	}
	
	return Frame
	
});