
define(["thirdparty/jquery" ], function( jQuery ) {
	
	var Pixel = function(nX, nY) {
		
		this.m_sColor = "#FFF";
		this.m_nX;
		this.m_nY;
	}
	
	Pixel.prototype.setColor = function( sColor ) {
		this.m_sColor = sColor;
	}
	
	return Pixel;
	
});