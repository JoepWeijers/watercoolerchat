'use strict';

export const getStarted = () => {
	const companyName = document.querySelector('#company-name').value;
	location.href = '/at/' + encodeURIComponent(companyName) + '/';
};

export const redirectToHttps = () => {
	if (!window.location.href.startsWith('https') && !window.location.href.startsWith('http://localhost')) {
		window.location.href = window.location.href.replace('http', 'https');
	}
};

export const getCompanyNameFromUrl = () => {
	const url = window.location.href.replace(/\/$/, '');
	return url.slice(url.lastIndexOf('/') + 1);
};