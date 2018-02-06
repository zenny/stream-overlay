

<?php 
						$dirPath = dir('upload/json/');
						$imgArray = array();
						
						while (($file = $dirPath->read()) !== false)
						{
							if ((substr($file, -4)=="json") || (substr($file, -3)=="JSON") || (substr($file, -3)=="png"))
						{
							$imgArray[ ] = trim($file);
						}
						}
						$dirPath->close();
						sort($imgArray);
						$c = count($imgArray);
						for($i=0; $i<$c; $i++)
						{
							echo "<option value=\"" . substr($imgArray[$i], 0, -5) . "\">" . substr($imgArray[$i], 0, -5) . "\n";
						}
						 
					?>