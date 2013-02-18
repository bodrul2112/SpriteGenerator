
define(["thirdparty/jquery" ], function( jQuery ) {
	
	var GiantSprite = function( oFrameLoop ) {
		
		this.m_oFrameLoop = oFrameLoop;
		this.m_eImage = "";
		this.m_nScaleFactor = 4;
	}
	
	GiantSprite.prototype.setScaleFactor = function( nScaleFactor ) {
		this.m_nScaleFactor = nScaleFactor;
	}
	
	GiantSprite.prototype.createImageFromFrameSetLoop = function( oFrameSetLoop ) {
		//TODO:
	}
	
	return GiantSprite;
	
});