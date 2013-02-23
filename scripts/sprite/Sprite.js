

define(["thirdparty/jquery", 
        "sprite/frame/FrameLoop", 
        "sprite/data/GiantSprite" ], 
        
        function(	jQuery,
        			FrameLoop,
        			GiantSprite ) {
	
	var Sprite = function() {
		
		this.m_nX = 0;
		this.m_nY = 0;
		
		this.m_oFrameLoop = new FrameLoop();
		this.m_oGiantSprite = new GiantSprite( this.m_oFrameLoop );
		this.m_nScaleFactor = 4;
	}

	Sprite.prototype.getFrameLoop = function() {
		
		return this.m_oFrameRenderer;
	}
	
	return Sprite;
	
});