

define(["thirdparty/jquery", "sprite/frame/FrameRenderer"], function( jQuery, FrameRenderer ) {
	
	var Sprite = function() {
		
		this.m_nX = 0;
		this.m_nY = 0;
		this.m_oFrameRenderer = new FrameRenderer();
	}
	
	Sprite.prototype.getFrameRenderer = function() {
		
		return this.m_oFrameRenderer;
	}
	
	return Sprite;
	
});