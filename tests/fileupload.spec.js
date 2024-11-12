import { test} from "@playwright/test";



test('upload file',async ({page})=>{
 
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    // await page.locator('#filesToUpload').setInputFiles("filefolder/file1.txt"); //for single file upload
    await page.locator('#filesToUpload').setInputFiles(["filefolder/file1.txt","filefolder/file2.xls"]);   //for multiple file upload
    await page.locator('#filesToUpload').setInputFiles([]);   // for remove files
    await page.pause();
 })





 

// when <input type=file is not present in html (drag and drop file)

//  test('upload file',async ({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/upload");
//     const filepromise = page.waitForEvent("filechooser");
//     await page.locator('#drag-drop-upload').click();
//     const filechoose = await filepromise;
//     await filechoose.setFiles("filefolder/file1.txt")
//     await page.pause();
//  })


 
