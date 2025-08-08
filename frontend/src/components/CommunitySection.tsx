import { MessageCircle, Users, Github, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card2";
import { Button } from "./ui/button2";

const CommunitySection = () => {
  const communityLinks = [
    {
      name: "Discord",
      description: "Join our Discord server for real-time discussions",
      icon: MessageCircle,
      link: "#",
      color: "text-blue-400",
    },
    {
      name: "GitHub",
      description: "Contribute to the open-source project",
      icon: Github,
      link: "https://github.com",
      color: "text-gray-400",
    },
    {
      name: "Twitter",
      description: "Follow us for the latest updates",
      icon: Twitter,
      link: "#",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-20 relative" id="community">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-terminal text-3xl md:text-4xl text-glow-green mb-4">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Connect with developers, traders, and AI enthusiasts building the future of DeFi
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {communityLinks.map((community) => (
            <Card
              key={community.name}
              className="neon-border bg-card/30 backdrop-blur-sm hover:shadow-neon-green transition-all duration-500 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted/20 w-fit">
                  <community.icon className={`w-8 h-8 ${community.color}`} />
                </div>
                <CardTitle className="font-terminal text-lg text-glow-green">
                  {community.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-mono text-sm mb-6">
                  {community.description}
                </CardDescription>
                <Button
                  variant="neon"
                  size="sm"
                  className="w-full group-hover:shadow-lg"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-terminal text-2xl text-glow-green mb-2">500+</div>
            <div className="font-mono text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center">
            <div className="font-terminal text-2xl text-glow-blue mb-2">24/7</div>
            <div className="font-mono text-sm text-muted-foreground">AI Monitoring</div>
          </div>
          <div className="text-center">
            <div className="font-terminal text-2xl text-glow-purple mb-2">100%</div>
            <div className="font-mono text-sm text-muted-foreground">Open Source</div>
          </div>
          <div className="text-center">
            <div className="font-terminal text-2xl text-glow-green mb-2">∞</div>
            <div className="font-mono text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
