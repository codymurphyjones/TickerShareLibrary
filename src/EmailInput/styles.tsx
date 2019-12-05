
import * as React from 'react';

const useStyles = {
	earlyAccessButton: earlyAccessButton,
	earlyAccessFrame: earlyAccessFrame,
	showContentSubmit: showContentSubmit,
	showContentTextBox: showContentTextBox,
	showContentFrame: showContentFrame,
	showLoadingFrame: showLoadingFrame,
	showLoadingIcon: showLoadingIcon
}

let small = 360;
let medium = 720;
let large = 1280;

function StyleResize(windowWidth: number, sm:string, md:string, lg:string, def:string): string {

	if(windowWidth >= large)
		return lg; //'800px';
	
	if(windowWidth > medium && windowWidth < large)
		return md;//"550px";
	
	if(windowWidth <= small )
		return sm;//"100%";
	
	return def;
}

    
	
function showLoadingFrame() {
 
  let styleVal: React.CSSProperties = {
		display: 'block',margin: 'auto auto', 
		backgroundColor: 'rgba(0,0,0,0.0)' 
	}

  return styleVal;
}

function showLoadingIcon() {
 
  let styleVal: React.CSSProperties = {
				margin: 'auto auto'
				}

  return styleVal;
}


function showContentFrame(windowWidth: number) {
 
  let styleVal: React.CSSProperties = {
				display: (windowWidth >= 720) ? 'flex' : 'block',
				justifyContent: 'space-around',
				maxWidth: StyleResize(windowWidth,"100%", "800px", "800px", "800px"),
				margin: 'auto'}

  return styleVal;
}

function showContentTextBox() {

  let styleVal: React.CSSProperties = {
						backgroundColor: "#FFF",
						padding: '10px 10px',
						borderRadius: '10px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '60%',
						maxWidth: '500px',
						marginTop: '10px',
						fontSize: "18px",
						fontFamily: 'Helvetica Neue',
						height: '35px'
					}

  return styleVal;
}

function showContentSubmit(windowWidth: number) {

  let styleVal: React.CSSProperties = {
					margin: (windowWidth > 680) ? '10px 0px 2px 0px' : '0px',
					borderRadius: '10px',
					padding: '15px 10px',
					backgroundColor: '#1199EE',
					border: '2px solid #1199EE',
					color: '#FFF',
					width: '64%',
					maxWidth: StyleResize(windowWidth, '100%','200px','200px', '100%'),
					fontWeight: 'bold',
					fontFamily: 'Helvetica Neue',
					textAlign: 'center'
				}
  return styleVal;
}

function earlyAccessFrame(showButton: boolean, windowWidth: number) {
  
  let styleVal: React.CSSProperties = {
				width: '100%',
				height: 'auto',
				maxWidth: (windowWidth > 500) ? '150px' : '100px',
				fontWeight: 'bold',
				position: 'fixed',
				top: '-15px',
				right: '12%',
				visibility: showButton ? "visible" : "hidden"
			}

  return styleVal;
}

function earlyAccessButton(windowWidth: number) {
  
  let styleVal: React.CSSProperties = {
						backgroundColor: '#1199EE',
						border: '2px solid #1199EE',
						color: '#FFF',
						borderRadius: '12px',
						padding: '10px 0px',
						width: '100%',
						maxWidth: '120px',
						marginTop: '25px',
						fontWeight: 'bold',
						display: 'inline-block',
						fontSize: (windowWidth > 500) ? '14px' : '2.5vw',
						textDecoration: 'none',
						textAlign: 'center',
						fontFamily: 'Helvetica Neue'

					}

  return styleVal;
}


export default useStyles;

