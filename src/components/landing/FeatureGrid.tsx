import Card from '../ui/Card';
import { Monitor, User, Star } from 'lucide-react';

const features = [
  {
    title: 'Expert Review',
    description: 'Get detailed feedback from experienced educators.',
    icon: <User />
  },
  {
    title: 'Personalized Evaluation',
    description: 'Receive scores and suggestions tailored to your work.',
    icon: <Monitor />
  },
  {
    title: 'Achieve Excellence',
    description: 'Improve your writing with actionable insights.',
    icon: <Star />
  }
];

const FeatureGrid = () => {
  return (
    <section className="feature-grid py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <div className="icon mb-4 text-accent">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
