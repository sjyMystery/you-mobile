/**
 * Created by 34883 on 2017-08-10.
 */

export const GetContactList = () =>
{
	fetch('http://incidence.cn:9924/csrf_token' , {method : 'GET'})
};