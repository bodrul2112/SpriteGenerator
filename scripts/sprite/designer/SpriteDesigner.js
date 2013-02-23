
define(["thirdparty/jquery", "sprite/Sprite","sprite/designer/FrameDesigner"], function( jQuery, Sprite, FrameDesigner ) {
	
	var SpriteDesigner = function() {
		
		this.m_oLoadedSprite;
		this.m_oFrameDesigner = new FrameDesigner();
		
	}
	
	SpriteDesigner.prototype.loadSprite = function( oSprite ) {
		
		this.m_oLoadedSprite = oSprite;
	}
	
	SpriteDesigner.prototype.newSprite = function() {
		
		this.m_oLoadedSprite = new Sprite();
        this.m_oLoadedSprite.getFrameLoop();
	}
	
	return SpriteDesigner;
	
});