import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AdminPostManager from '@/components/AdminPostManager';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    location: '',
    type: 'positive' as 'positive' | 'negative',
    impact: 'Medium',
    x_pos: 0,
    y_pos: 0
  });

  // Simple admin check - you might want to implement proper role-based auth
  const isAdmin = user?.email === 'kanghisu23@gmail.com';

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-center text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              You don't have permission to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('map_events')
        .insert([{
          title: newEvent.title,
          description: newEvent.description,
          location: newEvent.location,
          x_pos: newEvent.x_pos,
          y_pos: newEvent.y_pos,
          user_id: user.id
        }]);

      if (error) throw error;

      toast({
        title: "Event Added",
        description: "New map event has been created successfully.",
      });

      setNewEvent({
        title: '',
        description: '',
        location: '',
        type: 'positive',
        impact: 'Medium',
        x_pos: 0,
        y_pos: 0
      });
    } catch (error) {
      console.error('Error adding event:', error);
      toast({
        title: "Error",
        description: "Failed to add event. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-pearl">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal mb-2">Admin Dashboard</h1>
          <p className="text-dusty">Manage your application content and monitor activity</p>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Map Events</TabsTrigger>
            <TabsTrigger value="posts">Wall Posts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Map Event</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddEvent} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        placeholder="Event title"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                      placeholder="Event description"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">X Position (%)</label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={newEvent.x_pos}
                        onChange={(e) => setNewEvent({...newEvent, x_pos: parseFloat(e.target.value)})}
                        placeholder="50.0"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Y Position (%)</label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={newEvent.y_pos}
                        onChange={(e) => setNewEvent({...newEvent, y_pos: parseFloat(e.target.value)})}
                        placeholder="50.0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Event Type</label>
                      <Select value={newEvent.type} onValueChange={(value: 'positive' | 'negative') => setNewEvent({...newEvent, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="positive">Positive</SelectItem>
                          <SelectItem value="negative">Negative</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Impact Level</label>
                      <Select value={newEvent.impact} onValueChange={(value) => setNewEvent({...newEvent, impact: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Add Event
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Position Helper</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  To find the correct X and Y positions, use these approximate guidelines:
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Badge variant="outline" className="mb-2">Major Regions (X%)</Badge>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>North America: 15-25%</li>
                      <li>South America: 20-30%</li>
                      <li>Europe: 45-55%</li>
                      <li>Africa: 50-60%</li>
                      <li>Asia: 60-80%</li>
                      <li>Australia: 75-85%</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Latitude Guide (Y%)</Badge>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Arctic: 10-20%</li>
                      <li>Northern regions: 20-40%</li>
                      <li>Equatorial: 45-55%</li>
                      <li>Southern regions: 60-80%</li>
                      <li>Antarctica: 85-95%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts">
            <AdminPostManager />
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Application Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This will include user activity, post engagement, and map interaction metrics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Application Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Settings panel coming soon...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This will include site configuration, user management, and feature toggles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;