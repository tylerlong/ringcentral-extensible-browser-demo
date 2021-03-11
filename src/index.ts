const RingCentral = require('@rc-ex/core').default;

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

rc.login({
  username: process.env.RINGCENTRAL_USERNAME,
  extension: process.env.RINGCENTRAL_EXTENSION,
  password: process.env.RINGCENTRAL_PASSWORD,
});

(global as any).sendFax = async (e: any) => {
  e.preventDefault();
  console.log('send fax');
  const element = document.getElementById('image')! as HTMLInputElement;
  const files = element.files!;
  if (files.length === 0) {
    global.alert('Please specify a file to send');
    return;
  }
  const file = files[0];
  console.log('111');

  const r = await rc.restapi().account().extension().get();
  // .fax()
  // .post({
  //   to: [{phoneNumber: process.env.RINGCENTRAL_RECEIVER}],
  //   attachments: [
  //     {
  //       filename: file.name,
  //       contentType: `image/${file.name.endsWith('.png') ? 'png' : 'jpeg'}`,
  //       content: file,
  //     },
  //   ],
  // });
  console.log(r);
  global.alert('Fax sent');
};
