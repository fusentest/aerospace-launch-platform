import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, MapPin, Briefcase, Award, Settings, Edit2, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  name: string;
  email: string;
  location: string;
  title: string;
  bio: string;
  avatar: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Alex Johnson",
    email: "alex@aerolunch.com",
    location: "Kennedy Space Center, Florida",
    title: "Launch Operations Manager",
    bio: "Passionate about space exploration and rocket science. Leading mission operations for AeroLaunch.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  });

  const [editData, setEditData] = useState<ProfileData>(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const handleChange = (field: keyof ProfileData, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const achievements = [
    { icon: Award, label: "50+ Successful Launches", color: "bg-cyan-500/20 text-cyan-400" },
    { icon: Briefcase, label: "10 Years Experience", color: "bg-purple-500/20 text-purple-400" },
    { icon: Award, label: "Mission Excellence Award", color: "bg-orange-500/20 text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold glow-cyan">AeroLaunch</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Profile Header Card */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-32 w-32 border-2 border-primary">
                  <AvatarImage src={profileData.avatar} alt={profileData.name} />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">{profileData.name}</h1>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{profileData.title}</span>
                      </div>
                    </div>
                    {!isEditing && (
                      <Button 
                        onClick={handleEdit}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {profileData.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-foreground leading-relaxed">{profileData.bio}</p>
              </div>
            </CardContent>
          </Card>

          {/* Edit Mode */}
          {isEditing && (
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8 border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit2 className="h-5 w-5" />
                  Edit Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={editData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-background/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-background/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={editData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="bg-background/50 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={editData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="bg-background/50 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar">Avatar URL</Label>
                  <Input
                    id="avatar"
                    type="url"
                    value={editData.avatar}
                    onChange={(e) => handleChange('avatar', e.target.value)}
                    className="bg-background/50 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={editData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={4}
                    className="bg-background/50 border-border"
                  />
                </div>

                <div className="flex gap-3 justify-end pt-4">
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Achievements */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
              <CardDescription>Recognition and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border border-border/50 ${achievement.color}`}
                    >
                      <Icon className="h-6 w-6 mb-2" />
                      <p className="font-medium text-sm">{achievement.label}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info Tabs */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="activity" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-background/50">
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="missions">Missions</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="activity" className="space-y-4 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-muted-foreground">Last login</span>
                      <span className="text-foreground">Today at 2:34 PM</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-muted-foreground">Profile updated</span>
                      <span className="text-foreground">2 days ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Account created</span>
                      <span className="text-foreground">January 15, 2024</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="missions" className="space-y-4 pt-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-background/50 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">Starlink Mission 47</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">March 15, 2026</p>
                    </div>
                    <div className="p-3 bg-background/50 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">Mars Cargo Mission</span>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">In Progress</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">March 22, 2026</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                      <div>
                        <p className="font-medium text-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about missions</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                      <div>
                        <p className="font-medium text-foreground">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Enhance account security</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
