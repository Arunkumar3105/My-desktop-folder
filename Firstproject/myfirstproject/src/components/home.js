import React from 'react'
// import './regform.css';
import './user.css'
import './sidebar1.css'
// import { yupToFormErrors } from 'formik'
import{Formik} from "formik"
// import {useForm} from "react-hook-form";
// import{yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
const Home = () => {
  return(
  <Formik
  initialValues={{firstname:'',initialname:'',address1:'',address2:'',zipcode:'',email:'',mobile:'',doctorid:'',speciality:'',licenseno:'',digitalsign:''}}
      validationSchema ={ yup.object({
      firstname:yup.string()
      .required('Firstname is Required'),
      initialname:yup.string()
      .required("Required"),
      address1:yup.string()
      .required('Required'),
      address2:yup.string()
      .required("Required"),
      zipcode:yup.number()
      .required("Required"),
      email:yup.string()
      .required("Required")
      .email("Invalid Email"),
      mobile:yup.number()
      
      .integer("A Phone number cant start with a decimal point")
      .required("Required"),
      doctorid:yup.string()
      .required("Required"),
      licenseno:yup.string()
      .required("Required"),
      speciality:yup.string()
      .required("Required"),
      digitalsign:yup.string()
      .required("Required")

    })}
  onSubmit={(values,{setSubmitting})=>
{
  setTimeout(()=>{
    alert(JSON.stringify(values,null,2));
  },400);
}}
     >
      {formik=>{
        console.log(formik, 'formik')
         return(
          <form onSubmit={formik.handleSubmit}>
    <div className="drr" style={{zIndex: 1}}>
  <div style={{display: 'block'}}>
    <div className="flex-container">
      <div style={{display: 'block'}} className="first">
        <div>
          <label>First Name</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="text" name="firstname" onChange={(e)=>{
            formik.setFieldValue('firstname', e.target.value)

          }}  {...formik.getFieldProps('firstname')} id="fname112" />
          {formik.touched.firstname && formik.errors.firstname?(
             <div className='fv'>{formik.errors.firstname}</div>):null}
   
          
         
        </div>
      </div>
      <div style={{display: 'block'}} className="second">
        <div>
          <label>Initial Name</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type='text' {...formik.getFieldProps('initialname')} id="sname112" />
          {formik.touched.initialname && formik.errors.initialname?(
             <div className='fv'>{formik.errors.initialname}</div>):null}
     
         
        </div>
      </div>
    </div>

    <div className="flex-container">
      <div style={{display: 'block'}} className="address1">
        <div>
          <label>Address Line1</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="text" {...formik.getFieldProps('address1')} id="line1112" />
          {formik.touched.address1 && formik.errors.address1?(
             <div className='fv'>{formik.errors.address1}</div>):null}
   
         
        </div>
      </div>
      <div style={{display: 'block'}} className="address2">
        <div>
          <label>Address Line2</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="text" {...formik.getFieldProps('address2')} id="line2223" />
         
          {formik.touched.address2 && formik.errors.address2?(
             <div className='fv'>{formik.errors.address2}</div>):null}

         
        </div>
      </div>
    </div>

    <div className="flex-container">
      <div style={{display: 'block'}} className="address3">
        <div><label>Address Line3</label></div>
        <div><input type="text" name="line3334" id="line3334" /></div>
      </div>
      <div style={{display: 'block'}} className="address4">
        <div><label>Address Line4</label></div>
        <div><input type="text" name="line4445" id="line4445" /></div>
      </div>
    </div>

    <div className="flex-container">
      <div style={{display: 'block'}} className="code">
        <div>
          <label>Zipcode</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="text"  {...formik.getFieldProps('zipcode')} id="zcode112" />
         
          {formik.touched.zipcode && formik.errors.zipcode?(
             <div className='fv'>{formik.errors.zipcode}</div>):null}

         
        </div>
      </div>
    </div>
  
    <h2 className="cd">Contact Details</h2>
    <div className="flex-container">
      <div style={{display: 'block'}} className="email">
        <div>
          <label>EmailId</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="email"  {...formik.getFieldProps('email')} id="mail112" />
         
          {formik.touched.email && formik.errors.email?(
             <div className='fv'>{formik.errors.email}</div>):null}
    
         
        </div>
      </div>
      <div style={{display: 'block'}} className="aemail">
        <div><label>Alternate Email</label></div>
        <div><input type="email" name="amail112" id="amail112" /></div>
      </div>
    </div>

    <div className="flex-container">
      <div style={{display: 'block'}} className="mno">
        <div>
          <label>Mobile No</label><span style={{color: 'red'}}>*</span>
        </div>
        <div className="form-container">
          <input type="number" {...formik.getFieldProps('mobile')} id="num122" />
         
          {formik.touched.mobile && formik.errors.mobile?(
             <div className='fv'>{formik.errors.mobile}</div>):null}
    
         
        </div>
      </div>
      <div style={{display: 'block'}} className="amno">
        <div><label>Alternate Mobile Number</label></div>
        <div><input type="number" name="num1112" id="num1112" /></div>
      </div>
    </div>
    
    <div className="dotd">
      <h2 className="cd">Other Details</h2>
      <div className="flex-container">
        <div style={{display: 'block'}} className="mnon">
          <div>
            <label>Doctor ID</label><span style={{color: 'red'}}>*</span>
          </div>
          <div className="form-container">
            <input type="text" {...formik.getFieldProps('doctorid')} id="doc1112" />
            
            {formik.touched.doctorid && formik.errors.doctorid?(
             <div className='fv'>{formik.errors.doctorid}</div>):null}
        
           
          </div>
        </div>
        <div style={{display: 'block'}} className="amnon">
          <div>
            <label>Speciality</label><span style={{color: 'red'}}>*</span>
          </div>
          <div className="form-container">
            <input type="text" {...formik.getFieldProps('speciality')} id="spc112" />
          
            {formik.touched.speciality && formik.errors.speciality?(
             <div className='fv'>{formik.errors.speciality}</div>):null}
        
            
          </div>
        </div>
      </div>
      <div className="flex-container" style={{marginTop: 10}}>
        <div style={{display: 'block'}} className="mnon1">
          <div>
            <label>License No</label><span style={{color: 'red'}}>*</span>
          </div>
          <div className="form-container">
            <input type="text" {...formik.getFieldProps('licenseno')} id="lno112" />
            
            {formik.touched.licenseno && formik.errors.licenseno?(
             <div className='fv'>{formik.errors.licenseno}</div>):null}
       
           
          </div>
        </div>
        <div style={{display: 'block'}} className="amnon1">
          <div><label>WCB License No</label></div>
          <div><input type="text" name="num2223" id="num2223" /></div>
        </div>
      </div>
      <div className="flex-container" style={{marginTop: 10}}>
        <div style={{display: 'block'}} className="code1">
          <div>
            <label>Digital Signature</label><span style={{color: 'red'}}>*</span>
          </div>
          <div className="form-container">
            <input type="file" {...formik.getFieldProps('digitalsign')} id="dsign112" />
           
            {formik.touched.digitalsign && formik.errors.digitalsign?(
             <div className='fv'>{formik.errors.digitalsign}</div>):null}
          <br />
           
          </div>
        </div>
      </div>
    </div>
    <div className="su">
      <button name="sub112" id="sub112" type="submit">Submit</button>
    </div>
  </div>
</div>
    

</form>
         )}}
         </Formik>
  );
            };
         
  
         
   

// function Home(){
//   return(
//     <h1>Home Page</h1>
//   )
  
// }
export default Home;