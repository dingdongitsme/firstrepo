struct CSV_Parser 
(
	function parse_first_row row &ids &names = (
		cols = filterString row ";"
		for col in cols do (
			numbers = FilterString col ":"
			append ids (numbers[1] as integer)
			append names numbers[2]
		)
		--print ids
		--print names
	),
	function get_size lines &width &height = 
	(
		height = lines.count - 4
		cols = filterString lines[5] ";"
		width = cols.count
		print ("width: " + width as string)
		print ("height: " + height as string)
	),
	function parse importpath = (
		ids = #()
		names = #()
		textures = #()
		local lines = (dotnetClass "System.IO.File").ReadAllLines importpath
		CSV_Parser.parse_first_row lines[1] &ids &names
		CSV_Parser.get_size lines &width &height
		for id in ids do append textures (bitmap width height color:red)
		--return 0
		-- iterate 
		for i = 1 to height do 
		(
			cols = FilterString lines[i+4] ";"
			rows_out = for id in ids collect #()

			for j in cols do 
			(
				id = j as integer
				index = findItem ids id 

				for k = 1 to ids.count do 
				(
					if k == index then append rows_out[k] (color 255 255 255)
					else append rows_out[k] (color 0 0 0)
				)
			)
			for k = 1 to ids.count do setPixels textures[k] [0,i-1] rows_out[k] 
		) 
		for t in textures do display t 
	)
)


p = @"X:\02_Kunden\BAL\01_Basics\00_Datenbibliothek\CSV\948_57301_10_160x230.csv"

CSV_Parser.parse p