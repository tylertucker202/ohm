import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetDssImgService {

  constructor(private http: HttpClient) { }

  public construct_url(coords: any): string {
    /*
    CGI parameters
    Here are the CGI parameters currently recognized:
    r  - right ascension
    d  - declination
    e  - equinox (B1950 or J2000; default: J2000)
    h  - height of image (arcminutes; default: 15.0)
    w  - width of image (arcminutes; default: 15.0)
    f  - image format (FITS or GIF; default: FITS)
    c  - compression (UNIX, GZIP, or NONE; default: NONE; compression 
        applies to FITS only)
    v  - Which version of the survey to use:
        1  - First Generation survey (garden variety)
        2  - Second generation survey (incomplete)
        3  - Check the 2nd generation; if no image is available,
              then go to the 1st generation.
        4  - The Quick V survey (whence came the Guide Stars Catalog;
              used mostly for Phase II proposal submission)
    s  - Save the file to disk instead of trying to display.
        (ON (or anything) or not defined; default: not defined.)

  Case is not significant in the values, but it is in the parameter names (e.g., use r=, not R=).

  If these are too cryptic, there are synonyms:

    r -> ra
    d -> dec
    e -> equinox
    h -> height
    w -> width
    f -> format
    c -> compression
    v -> version
    s -> save
    
    example: "https://archive.stsci.edu/cgi-bin/dss_search?v=poss2ukstu_red&r=00+42+44.35&d=%2B41+16+08.6&e=J2000&h=15.0&w=15.0&f=gif&c=none&fov=NONE&v3="
  */
  let imageUrl = 'http://archive.stsci.edu/cgi-bin/dss_search'
  return imageUrl
  }

  public get_dss_img(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'})
  }
}
