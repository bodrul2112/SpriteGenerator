
define(["thirdparty/jquery", "sprite/data/Pixel" ], function( jQuery, Pixel ) {

	var PixelTable = function(nRows, nColumns) {
		
		this.m_nRows = nRows;
		this.m_nColumns = nColumns;
		
		this.m_nScaleFactor = 5;
		
		this.m_oRows = [];
		for(var i=0; i<this.m_nRows; i++)
		{
			var pPixels = [];
			for(var j=0; j<this.m_nColumns; j++) 
			{
				pPixels.push( new Pixel(i, j));
			}
			this.m_oRows.push( pPixels );
		}
	}
	
	PixelTable.protoype.loadImage = function( eImage ) {
		
	}
	
	PixelTable.protoype.loadImage = function( eImage ) {
		
	}
	
	PixelTable.protoype.loadString = function( sTableString ) {
		
	}
	
	return PixelTable;
	
});