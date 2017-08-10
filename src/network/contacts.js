/**
 * Created by 34883 on 2017-08-10.
 */

export const GetContactList = () =>
{
	fetch('http://incidence.cn:9924/contact' , {method : 'GET'}).then((response) =>
	{
		console.log(response);
		response.json().then((data) =>
			{
				console.log(data);
			}
		)
	})
		.catch((error) =>
		{

		})
};