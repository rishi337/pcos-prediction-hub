
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShieldCheck, Stethoscope, ScrollText, AlertTriangle } from 'lucide-react';

const InformationSection = () => {
  return (
    <section id="info" className="py-16 px-4 md:px-8 bg-gradient-to-b from-medical-50 to-lavender-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-800 mb-4">Understanding PCOS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. 
            Early detection and management can significantly improve quality of life.
          </p>
        </div>
        
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About PCOS</TabsTrigger>
            <TabsTrigger value="symptoms">Common Symptoms</TabsTrigger>
            <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScrollText className="h-5 w-5 text-medical-600" />
                  About Polycystic Ovary Syndrome
                </CardTitle>
                <CardDescription>
                  Understanding the fundamentals of PCOS
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders among women of reproductive age, 
                  affecting approximately 8-13% of women worldwide. It is characterized by a combination of symptoms related to 
                  elevated androgens (male hormones) and ovarian dysfunction.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-2">What Causes PCOS?</h4>
                    <p className="text-gray-600">
                      The exact cause of PCOS is unknown, but several factors play a role:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Genetics (family history of PCOS)</li>
                      <li>Insulin resistance</li>
                      <li>Low-grade inflammation</li>
                      <li>Hormonal imbalances</li>
                      <li>Environmental factors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-2">How PCOS Affects the Body</h4>
                    <p className="text-gray-600">
                      PCOS can affect multiple systems in the body:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Reproductive system (irregular periods, fertility issues)</li>
                      <li>Metabolic health (insulin resistance, diabetes risk)</li>
                      <li>Cardiovascular system (increased heart disease risk)</li>
                      <li>Skin and hair (excess hair growth, acne)</li>
                      <li>Mental health (increased anxiety and depression)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-lavender-50 p-4 rounded-lg border border-lavender-100 mt-4">
                  <h4 className="font-medium text-lavender-800 mb-2">Why Early Detection Matters</h4>
                  <p className="text-lavender-700">
                    Early detection and management of PCOS can help prevent long-term complications such as type 2 diabetes, 
                    heart disease, endometrial cancer, and infertility. With proper management, many women with PCOS lead 
                    healthy, symptom-controlled lives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="symptoms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-medical-600" />
                  Common PCOS Symptoms
                </CardTitle>
                <CardDescription>
                  Recognizing the signs and symptoms of PCOS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  PCOS symptoms can vary widely between individuals. Some women have mild symptoms, while others are severely affected. 
                  Symptoms often begin shortly after puberty, but can develop later. The following are common indicators of PCOS:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Menstrual Irregularities</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Infrequent periods (oligomenorrhea)</li>
                      <li>Absent periods (amenorrhea)</li>
                      <li>Prolonged periods</li>
                      <li>Heavy bleeding</li>
                      <li>Unpredictable menstrual cycles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Androgen Excess Signs</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Hirsutism (excess facial and body hair)</li>
                      <li>Severe acne</li>
                      <li>Male-pattern baldness</li>
                      <li>Darkening of skin (acanthosis nigricans)</li>
                      <li>Skin tags</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Metabolic Issues</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Weight gain (especially around abdomen)</li>
                      <li>Difficulty losing weight</li>
                      <li>Fatigue</li>
                      <li>Mood swings</li>
                      <li>Sleep problems</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-medical-700 mb-3">Symptom Combinations</h4>
                  <p className="text-gray-600 mb-4">
                    Most women with PCOS will experience a combination of symptoms. The Rotterdam criteria, commonly used for diagnosis, 
                    requires at least two of the following three criteria:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                      <h5 className="font-medium text-medical-800 mb-2">Irregular/Absent Periods</h5>
                      <p className="text-medical-700 text-sm">
                        Indicating oligo-ovulation or anovulation
                      </p>
                    </div>
                    
                    <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                      <h5 className="font-medium text-medical-800 mb-2">Clinical or Biochemical Hyperandrogenism</h5>
                      <p className="text-medical-700 text-sm">
                        Excess androgen signs or elevated androgen levels in blood tests
                      </p>
                    </div>
                    
                    <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                      <h5 className="font-medium text-medical-800 mb-2">Polycystic Ovaries</h5>
                      <p className="text-medical-700 text-sm">
                        Multiple small follicles in ovaries visible on ultrasound
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="diagnosis" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-medical-600" />
                  PCOS Diagnosis
                </CardTitle>
                <CardDescription>
                  How PCOS is diagnosed by healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p>
                  Diagnosing PCOS typically involves a combination of clinical evaluation, laboratory tests, and imaging studies. 
                  Since other conditions can mimic PCOS symptoms, a thorough diagnostic process is important.
                </p>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                  <h4 className="font-medium text-medical-700 mb-3">Diagnostic Process</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                    <li>
                      <strong className="text-medical-800">Medical History:</strong>
                      <p className="mt-1">
                        Your doctor will ask about your menstrual cycles, symptoms, weight changes, and family history of PCOS or related conditions.
                      </p>
                    </li>
                    <li>
                      <strong className="text-medical-800">Physical Examination:</strong>
                      <p className="mt-1">
                        Your doctor will check your weight, BMI, blood pressure, and look for physical signs of androgen excess 
                        like excess hair growth, acne, or male-pattern hair loss.
                      </p>
                    </li>
                    <li>
                      <strong className="text-medical-800">Laboratory Tests:</strong>
                      <p className="mt-1">
                        Blood tests to check hormone levels, including:
                      </p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Androgens (testosterone, DHEAS)</li>
                        <li>FSH and LH (pituitary hormones)</li>
                        <li>Estrogen and progesterone</li>
                        <li>Thyroid hormones</li>
                        <li>Prolactin</li>
                        <li>Fasting glucose and insulin levels</li>
                        <li>Cholesterol and lipid profiles</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-medical-800">Pelvic Ultrasound:</strong>
                      <p className="mt-1">
                        To examine the appearance of the ovaries (looking for multiple small follicles) and the thickness of the uterine lining.
                      </p>
                    </li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-medical-50 p-5 rounded-lg border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Diagnostic Criteria</h4>
                    <p className="text-gray-600 mb-3">
                      The Rotterdam criteria are most commonly used, requiring at least 2 of 3 features:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Oligo/anovulation (irregular or absent periods)</li>
                      <li>Clinical and/or biochemical signs of hyperandrogenism</li>
                      <li>Polycystic ovaries on ultrasound</li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Other conditions must be excluded before diagnosing PCOS.
                    </p>
                  </div>
                  
                  <div className="bg-lavender-50 p-5 rounded-lg border border-lavender-100">
                    <h4 className="font-medium text-lavender-800 mb-3">Conditions to Rule Out</h4>
                    <p className="text-lavender-700 mb-3">
                      Several conditions can mimic PCOS symptoms and need to be ruled out:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-lavender-700">
                      <li>Thyroid disorders</li>
                      <li>Hyperprolactinemia</li>
                      <li>Congenital adrenal hyperplasia</li>
                      <li>Cushing's syndrome</li>
                      <li>Androgen-secreting tumors</li>
                      <li>Primary ovarian insufficiency</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-medical-100 p-4 rounded-lg border border-medical-200 mt-3">
                  <h4 className="font-medium text-medical-800 mb-2">When to Seek Diagnosis</h4>
                  <p className="text-medical-700">
                    Consider seeking evaluation if you experience irregular periods, difficulty getting pregnant, 
                    excessive hair growth, severe acne, or unexplained weight gain, especially if you have a family 
                    history of PCOS or type 2 diabetes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="management" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-medical-600" />
                  PCOS Management
                </CardTitle>
                <CardDescription>
                  Approaches to managing PCOS symptoms and improving quality of life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p>
                  While there is no cure for PCOS, effective management strategies can help control symptoms and reduce 
                  the risk of long-term complications. Treatment is personalized based on symptoms, health risks, and whether 
                  pregnancy is desired.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Lifestyle Modifications</h4>
                    <p className="text-gray-600 mb-3">
                      Lifestyle changes are the first-line treatment for PCOS:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>
                        <strong>Healthy Diet:</strong> Low glycemic index foods, balanced nutrition, reduced processed foods
                      </li>
                      <li>
                        <strong>Regular Exercise:</strong> 150+ minutes of moderate exercise weekly
                      </li>
                      <li>
                        <strong>Weight Management:</strong> Even 5-10% weight loss can improve symptoms
                      </li>
                      <li>
                        <strong>Stress Reduction:</strong> Yoga, meditation, adequate sleep
                      </li>
                      <li>
                        <strong>Avoiding Triggers:</strong> Limiting caffeine, alcohol, and smoking
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-medical-100">
                    <h4 className="font-medium text-medical-700 mb-3">Medications</h4>
                    <p className="text-gray-600 mb-3">
                      Various medications may be prescribed:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>
                        <strong>Hormonal Contraceptives:</strong> Regulate periods and reduce androgens
                      </li>
                      <li>
                        <strong>Anti-androgens:</strong> Block the effects of androgens on hair and skin
                      </li>
                      <li>
                        <strong>Metformin:</strong> Improves insulin sensitivity
                      </li>
                      <li>
                        <strong>Clomiphene or Letrozole:</strong> For ovulation induction if pregnancy is desired
                      </li>
                      <li>
                        <strong>Spironolactone:</strong> Reduces excess hair growth and acne
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                    <h4 className="font-medium text-medical-800 mb-2">Managing Fertility</h4>
                    <p className="text-gray-600">
                      For women trying to conceive:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Ovulation induction medications</li>
                      <li>Timed intercourse</li>
                      <li>Intrauterine insemination (IUI)</li>
                      <li>In vitro fertilization (IVF)</li>
                      <li>Ovarian drilling (less common)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                    <h4 className="font-medium text-medical-800 mb-2">Cosmetic Treatments</h4>
                    <p className="text-gray-600">
                      For managing visible symptoms:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Laser hair removal</li>
                      <li>Electrolysis</li>
                      <li>Topical creams for acne</li>
                      <li>Prescription skin treatments</li>
                      <li>Medical-grade skincare</li>
                    </ul>
                  </div>
                  
                  <div className="bg-medical-50 p-4 rounded-lg border border-medical-100">
                    <h4 className="font-medium text-medical-800 mb-2">Long-term Monitoring</h4>
                    <p className="text-gray-600">
                      Regular check-ups to monitor:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Blood pressure</li>
                      <li>Blood glucose levels</li>
                      <li>Cholesterol levels</li>
                      <li>Hormone profiles</li>
                      <li>Mental health</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-lavender-100 p-5 rounded-lg border border-lavender-200 mt-3">
                  <h4 className="font-medium text-lavender-900 mb-2">Holistic Approach</h4>
                  <p className="text-lavender-800">
                    The most effective PCOS management involves a multidisciplinary approach. Your healthcare team may include 
                    a gynecologist, endocrinologist, dietitian, mental health professional, and primary care physician working 
                    together to address all aspects of the condition.
                  </p>
                  <p className="text-lavender-800 mt-3">
                    Remember that PCOS management is a long-term commitment. With proper care and lifestyle modifications, 
                    most women with PCOS can lead healthy lives and significantly reduce their symptoms and long-term health risks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InformationSection;
