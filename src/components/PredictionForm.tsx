
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';

type FormValue = {
  age: number;
  weight: number;
  height: number;
  bmi: number;
  bloodGroup: string;
  pulseRate: number;
  respirationRate: number;
  regularCycle: boolean;
  cycleLength: number;
  hairGrowth: number;
  weightGain: boolean;
  skinDarkening: boolean;
  hairLoss: boolean;
  pimples: boolean;
  fastFood: number;
  regExercise: boolean;
};

const PredictionForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [predictionResult, setPredictionResult] = useState<{
    result: boolean;
    probability: number;
    confidence: 'low' | 'medium' | 'high';
  } | null>(null);
  
  const initialValues: FormValue = {
    age: 25,
    weight: 60,
    height: 160,
    bmi: 23.4,
    bloodGroup: 'O+',
    pulseRate: 75,
    respirationRate: 16,
    regularCycle: true,
    cycleLength: 28,
    hairGrowth: 2,
    weightGain: false,
    skinDarkening: false,
    hairLoss: false,
    pimples: false,
    fastFood: 2,
    regExercise: true,
  };
  
  const [formValues, setFormValues] = useState<FormValue>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? Number(value) : value;
    
    setFormValues(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Update BMI if weight or height changes
    if (name === 'weight' || name === 'height') {
      const weight = name === 'weight' ? Number(value) : formValues.weight;
      const height = name === 'height' ? Number(value) : formValues.height;
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      
      setFormValues(prev => ({
        ...prev,
        bmi: parseFloat(bmi.toFixed(1))
      }));
    }
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormValues(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value[0]
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to a ML model
    setTimeout(() => {
      // Mock prediction logic - in a real app, this would call an external API
      const symptomsCount = [
        !formValues.regularCycle,
        formValues.hairGrowth > 3,
        formValues.weightGain,
        formValues.skinDarkening,
        formValues.hairLoss,
        formValues.pimples,
        formValues.fastFood > 3,
        !formValues.regExercise,
        formValues.bmi > 25
      ].filter(Boolean).length;
      
      const probability = Math.min(0.1 + (symptomsCount * 0.1), 0.9);
      
      let confidence: 'low' | 'medium' | 'high' = 'low';
      if (probability > 0.7) confidence = 'high';
      else if (probability > 0.4) confidence = 'medium';
      
      setPredictionResult({
        result: probability > 0.5,
        probability,
        confidence
      });
      
      setShowResult(true);
      setLoading(false);
      toast({
        title: "Prediction Complete",
        description: "Your PCOS prediction results are ready.",
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setShowResult(false);
    setPredictionResult(null);
    toast({
      title: "Form Reset",
      description: "All values have been reset to default.",
    });
  };

  return (
    <section id="prediction" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-800 mb-4">PCOS Prediction Tool</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enter your medical parameters below to receive a preliminary PCOS risk assessment. This tool uses machine learning for prediction but is not a substitute for professional medical advice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-medical-100">
              <CardHeader className="bg-gradient-to-r from-medical-50 to-lavender-50 border-b border-medical-100">
                <CardTitle className="text-medical-800">Enter Your Information</CardTitle>
                <CardDescription>
                  Fill in your medical parameters for PCOS prediction
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-medical-700">Basic Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="age">Age (years)</Label>
                        <Input 
                          id="age" 
                          name="age" 
                          type="number" 
                          value={formValues.age} 
                          onChange={handleInputChange}
                          min={12}
                          max={65}
                          className="border-medical-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input 
                          id="weight" 
                          name="weight" 
                          type="number" 
                          value={formValues.weight} 
                          onChange={handleInputChange}
                          min={30}
                          max={150}
                          step={0.1}
                          className="border-medical-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input 
                          id="height" 
                          name="height" 
                          type="number" 
                          value={formValues.height} 
                          onChange={handleInputChange}
                          min={120}
                          max={220}
                          className="border-medical-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bmi">BMI (kg/m²)</Label>
                        <Input 
                          id="bmi" 
                          name="bmi" 
                          type="number" 
                          value={formValues.bmi} 
                          readOnly
                          className="bg-gray-50 border-medical-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("bloodGroup", value)}
                          defaultValue={formValues.bloodGroup}
                        >
                          <SelectTrigger className="border-medical-200">
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Menstrual History */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-medical-700">Menstrual History</h3>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="regularCycle">Regular Menstrual Cycle</Label>
                        <Switch 
                          id="regularCycle" 
                          checked={formValues.regularCycle} 
                          onCheckedChange={(checked) => handleSwitchChange("regularCycle", checked)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cycleLength">
                          Cycle Length (days)
                          <span className="ml-2 text-sm text-gray-500">{formValues.cycleLength} days</span>
                        </Label>
                        <Slider
                          id="cycleLength"
                          min={21}
                          max={45}
                          step={1}
                          value={[formValues.cycleLength]}
                          onValueChange={(value) => handleSliderChange("cycleLength", value)}
                          className="py-4"
                        />
                      </div>
                      
                      <h3 className="text-lg font-medium text-medical-700 pt-2">Symptoms</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hairGrowth">
                          Excessive Hair Growth (Hirsutism)
                          <span className="ml-2 text-sm text-gray-500">
                            {formValues.hairGrowth === 0 ? 'None' : 
                             formValues.hairGrowth === 1 ? 'Mild' : 
                             formValues.hairGrowth === 2 ? 'Moderate' : 
                             formValues.hairGrowth === 3 ? 'Noticeable' : 
                             'Severe'}
                          </span>
                        </Label>
                        <Slider
                          id="hairGrowth"
                          min={0}
                          max={5}
                          step={1}
                          value={[formValues.hairGrowth]}
                          onValueChange={(value) => handleSliderChange("hairGrowth", value)}
                          className="py-4"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="weightGain">Weight Gain</Label>
                        <Switch 
                          id="weightGain" 
                          checked={formValues.weightGain} 
                          onCheckedChange={(checked) => handleSwitchChange("weightGain", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="skinDarkening">Skin Darkening</Label>
                        <Switch 
                          id="skinDarkening" 
                          checked={formValues.skinDarkening} 
                          onCheckedChange={(checked) => handleSwitchChange("skinDarkening", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="hairLoss">Hair Loss</Label>
                        <Switch 
                          id="hairLoss" 
                          checked={formValues.hairLoss} 
                          onCheckedChange={(checked) => handleSwitchChange("hairLoss", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="pimples">Pimples/Acne</Label>
                        <Switch 
                          id="pimples" 
                          checked={formValues.pimples} 
                          onCheckedChange={(checked) => handleSwitchChange("pimples", checked)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Lifestyle */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-lg font-medium text-medical-700">Lifestyle Factors</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fastFood">
                          Fast Food Consumption (per week)
                          <span className="ml-2 text-sm text-gray-500">
                            {formValues.fastFood === 0 ? 'None' : 
                             formValues.fastFood === 1 ? 'Rarely' : 
                             formValues.fastFood === 2 ? 'Occasionally' : 
                             formValues.fastFood === 3 ? 'Frequently' : 
                             formValues.fastFood === 4 ? 'Very Frequently' : 
                             'Daily'}
                          </span>
                        </Label>
                        <Slider
                          id="fastFood"
                          min={0}
                          max={5}
                          step={1}
                          value={[formValues.fastFood]}
                          onValueChange={(value) => handleSliderChange("fastFood", value)}
                          className="py-4"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="regExercise">Regular Exercise</Label>
                        <Switch 
                          id="regExercise" 
                          checked={formValues.regExercise} 
                          onCheckedChange={(checked) => handleSwitchChange("regExercise", checked)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <CardFooter className="px-0 pt-4 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={resetForm}
                      className="border-medical-300 text-medical-700 hover:bg-medical-50"
                    >
                      Reset Form
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-medical-600 hover:bg-medical-700 text-white"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Get Prediction"}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            {showResult ? (
              <Card className={cn(
                "shadow-lg h-fit sticky top-4 transition-all duration-300 transform",
                predictionResult?.result ? "border-amber-300 bg-amber-50" : "border-green-300 bg-green-50",
                "scale-100 opacity-100"
              )}>
                <CardHeader className={cn(
                  "border-b",
                  predictionResult?.result ? "border-amber-200 bg-amber-100/50" : "border-green-200 bg-green-100/50"
                )}>
                  <CardTitle className={predictionResult?.result ? "text-amber-800" : "text-green-800"}>
                    Prediction Results
                  </CardTitle>
                  <CardDescription className={predictionResult?.result ? "text-amber-700" : "text-green-700"}>
                    Based on your provided information
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="text-center">
                    <div className={cn(
                      "inline-flex items-center justify-center w-24 h-24 rounded-full mb-3",
                      predictionResult?.result 
                        ? "bg-amber-200 text-amber-800" 
                        : "bg-green-200 text-green-800"
                    )}>
                      <span className="text-3xl font-bold">
                        {Math.round(predictionResult?.probability! * 100)}%
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {predictionResult?.result 
                        ? "Potential PCOS Indicators Present" 
                        : "Low PCOS Risk Indicators"}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      predictionResult?.result ? "text-amber-700" : "text-green-700"
                    )}>
                      Confidence: {predictionResult?.confidence.charAt(0).toUpperCase() + predictionResult?.confidence.slice(1)}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium mb-2">Important Note:</h4>
                    <p className="text-sm text-gray-600">
                      This prediction is based on a simplified model and is not a clinical diagnosis. 
                      Please consult with a healthcare professional for proper evaluation and diagnosis.
                    </p>
                  </div>
                  
                  {predictionResult?.result && (
                    <div>
                      <h4 className="font-medium mt-4 mb-2">Recommended Next Steps:</h4>
                      <ul className="text-sm space-y-2 list-disc pl-5 text-amber-800">
                        <li>Schedule an appointment with a gynecologist or endocrinologist</li>
                        <li>Request hormonal blood tests</li>
                        <li>Consider a pelvic ultrasound examination</li>
                        <li>Discuss your symptoms with your doctor</li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-medical-100 h-fit sticky top-4">
                <CardHeader className="bg-gradient-to-r from-medical-50 to-lavender-50 border-b border-medical-100">
                  <CardTitle className="text-medical-800">How It Works</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-gray-700">
                    Our prediction tool uses a machine learning model trained on medical data 
                    to predict the likelihood of PCOS based on your input parameters.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-medical-700">The process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Fill in all the required medical parameters</li>
                      <li>Our model analyzes the data based on known PCOS indicators</li>
                      <li>You receive a preliminary risk assessment</li>
                      <li>Use the results to discuss with healthcare professionals</li>
                    </ol>
                  </div>
                  
                  <div className="bg-lavender-50 p-4 rounded-lg border border-lavender-100 mt-3">
                    <h4 className="font-medium text-lavender-900 mb-2">Important Disclaimer:</h4>
                    <p className="text-sm text-lavender-800">
                      This tool provides a preliminary assessment only and is not a substitute 
                      for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
