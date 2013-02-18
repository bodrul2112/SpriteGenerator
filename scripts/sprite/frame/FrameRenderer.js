
define(["thirdparty/jquery", 
        "sprite/frame/FrameLoop", 
        "sprite/data/GiantSprite"], 
		
		function(jQuery, 
				FrameLoop,
				GiantSprite) {
	
	var FrameRenderer = function() {
		
		this.m_oFrameLoop = new FrameLoop();
		this.m_oGiantSprite = new GiantSprite( this.m_oFrameLoop );
		this.m_nScaleFactor = 4;
	}
	
	FrameRenderer.prototype._creatGiantSprite = function() {
		
	}
	
	FrameRenderer.prototype.renderCurrentFrame = function( nX, nY, oContext ) {
		
	}
	
	FrameRenderer.prototype.getFrameLoop = function() {
		
		return this.m_oFrameLoop;
	}
	
	return FrameRenderer;
	
});