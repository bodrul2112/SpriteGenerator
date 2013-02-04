
define(["thirdparty/jquery", "services/TemplateService", "sprite/touch/SpriteMouseController", 
        "sprite/renderer/SpriteRenderer"], 
		function( jQuery, tpl, SpriteMouseController, SpriteRenderer ) {
	
	var SpriteGenerator = function( eContainer ) {
		
		this.m_eContainer = eContainer;
		this.m_eCanvas = tpl.getTemplate(".spriteGeneratorContainer");
		this.m_oContext = this.m_eCanvas[0].getContext('2d');
		
		this.m_oSpriteRenderer = new SpriteRenderer( this.m_oContext ); 
		this.m_oSpriteMouseController = new SpriteMouseController( this.m_eCanvas, this.m_oRenderer );
		
		this.m_eContainer.append( this.m_eCanvas );
	}
	
	return SpriteGenerator;
	
});